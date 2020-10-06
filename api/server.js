const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const instrumentsRouter = require("../instruments/instruments-router");
const categoriesRouter = require("../categories/categories-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/instruments", instrumentsRouter);
server.use("/api/categories", categoriesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'UP'})
})

module.exports = server;