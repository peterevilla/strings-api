const express = require("express");
const Recipes = require("./recipes-model");
const router = express.Router();
const restricted = require("../auth/aunthenticate-middleware");

//GET ALL RECIPES
router.get("/", (req, res) => {
  const userId = req.headers.user_id;
  console.log(userId);
  Recipes.find()
    .then((recipes) => {
      if (!userId) {
        const publicRecipes = recipes.filter((recipe) => recipe.private !== 1);
        res.json(publicRecipes);
      } else {
        const publicRecipes = recipes.filter((recipe) => recipe.private !== 1);
        const privateRecipes = recipes.filter(
          (recipe) => recipe.user_id !== userId
        );
        const allRecipes = {...publicRecipes, ...privateRecipes };
        res.json(allRecipes);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving data" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.findById(id)
    .then((recipe) => {
      if (recipe.private !== 1) {
        res.status(201).json(recipe);
      } else {
        res.json({ message: "This Recipe is Private" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

router.post("/", (req, res) => {
  Recipes.add(req.body)
    .then((recipes) => {
      res.status(201).json({ message: "New recipe Added!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error posting data" });
    });
});

router.delete("/:id", (req, res) => {
  Recipes.findById(req.params.id)
    .then((recipe) => {
      if (recipe.private !== 1) {
        Recipes.remove(req.params.id)
          .then((recipe) => {
            res.status(201).json({ message: "Recipe was deleted" });
          })
          .catch((err) => {
            res.status(500).json({ message: "Error deleting" });
          });
      } else {
        res.json({
          message: "You are not aloww to delete, this Recipe is Private",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

router.put("/:id", (req, res) => {
  Recipes.findById(req.params.id)
    .then((recipe) => {
      if (recipe.private !== 1) {
        Recipes.update(req.params.id, req.body)
          .where((recipe) => {
            res.status(201).json({ message: "Recipe was updated" });
          })
          .catch((error) => {
            res.status(500).json({ message: "error" });
          });
      } else {
        res.json({
          message: "You are not aloww to edit, this Recipe is Private",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

function validatePrivacy(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.send({ error: "Must provide username and password" });
  } else {
    next();
  }
}

module.exports = router;
