const express = require("express");
const Recipes = require("./instruments-model");
const router = express.Router();

//GET ALL RECIPES
router.get("/", (req, res) => {
  Recipes.find()
    .then((instruments) => {
        res.status(200).json(instruments);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Error retrieving data" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.findById(id)
    .then((instrument) => {
      res.status(201).json(instrument);
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

router.post("/", (req, res) => {
    const userId = req.headers.user_id;
    const body = {...req.body, user_id: userId }
  Recipes.add(body)
    .then((instrument) => {
      res.status(201).json({ message: "New instrument Added!", instrument });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error posting data" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userId = req.headers.user_id;
  Recipes.findById(id)
    .then((instrument) => {
        if(instrument.user_id === Number(userId)) {
          Recipes.remove(req.params.id)
          .then((instrument) => {
            res.status(201).json({ message: "Instrument was deleted" });
          })
          .catch((err) => {
            res.status(500).json({ message: "Error deleting" });
          });
        } else {
          res.status(400).json({message: "You can not delete this Recipe"})
        }
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });



  
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const userId = req.headers.user_id;
    const body = {...req.body, user_id: userId }
  Recipes.update(id, body)
    .then((response) => {
      Recipes.findById(id)
        .then((instrument) => {
          res
            .status(200)
            .json({ message: "Recipe successfully updated", instrument });
        })
        .catch((err) => {
          res
            .status(404)
            .json({ message: "An instrument with that id does not exist" });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not update instrument" });
    });
});

module.exports = router;
