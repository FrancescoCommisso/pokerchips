const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => console.log(`Listening on port ${port}`));

var games = {};

app.get("/games", (req, res) => {
  res.send(games);
});

app.post("/create_game", (req, res) => {
  let newGame = new Game(req.body);
  newGame.addPlayer(req.body.name, req.body.numberOfChips);
  games[newGame.id] = newGame;
  console.log("received: " + JSON.stringify(req.body));
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
