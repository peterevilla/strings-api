const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/aunthenticate-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id/recipes', restricted, (req, res) => {
  const { id } = req.params
  Users.getUserRecipes(id).then(recipes => {
    res.status(200).json({message: "Here are the user's recipes", recipes});
  }).catch(err => {
    res.status(500).json({message: "Could not get user's items"});
  })
});

module.exports = router;