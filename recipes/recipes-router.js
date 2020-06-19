const express = require("express");
const Recipes = require("./recipes-model");
const router = express.Router();

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
        const privateRecipes = recipes.filter((recipe) => {
          return recipe.user_id === Number(userId) && recipe.private === 1;
        });
        const allRecipes = [...publicRecipes, ...privateRecipes];
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
      res.status(201).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

router.post("/", (req, res) => {
    const userId = req.headers.user_id;
    const body = {...req.body, user_id: userId }
  Recipes.add(body)
    .then((recipe) => {
      res.status(201).json({ message: "New recipe Added!", recipe });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error posting data" });
    });
});

router.delete("/:id", (req, res) => {
  Recipes.remove(req.params.id)
    .then((recipe) => {
      res.status(201).json({ message: "Recipe was deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const userId = req.headers.user_id;
    const body = {...req.body, user_id: userId }
  Recipes.update(id, body)
    .then((response) => {
      Recipes.findById(id)
        .then((recipe) => {
          res
            .status(200)
            .json({ message: "Recipe successfully updated", recipe });
        })
        .catch((err) => {
          res
            .status(404)
            .json({ message: "An recipe with that id does not exist" });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not update recipe" });
    });
});

module.exports = router;
