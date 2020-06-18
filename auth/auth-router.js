const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service.js");

router.post("/register", validation, (req, res) => {
  // implement registration
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    Users.add(credentials)
      .then((user) => {
        const token = generateToken(user);
        res.status(201).json({ data: user, token });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

router.post("/login", validation, (req, res) => {
  
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: "Welcome to Family Recipe API",
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "2h",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

//CUSTOM VALIDATION MIDDLEWARE
function validation(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.send({ error: "Must provide username and password" });
  } else {
    next();
  }
}

module.exports = router;
