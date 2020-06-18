const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const authRouter = require('../auth/auth-router.js');
// const authRouter = require("./auth/auth-router");
const usersRouter = require("../users/users-router");
const recipesRouter = require("../recipes/recipes-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/recipes", recipesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'UP'})
})

module.exports = server;