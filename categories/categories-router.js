const express = require("express");
const Recipes = require("./categories-model");
const router = express.Router();


router.get("/", (req, res) => {
    Recipes.find()
      .then((categories) => {
          res.status(200).json(categories);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: "Error retrieving data" });
      });
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
      .then((category) => {
        res.status(201).json(category);
      })
      .catch((err) => {
        res.status(500).json({ message: "error" });
      });
  });


  module.exports = router;