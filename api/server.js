const express = require("express");
const server = express();

const router = require("../games/games-route");

server.use(express.json());
server.use("/api/games", router);

module.exports = server;
