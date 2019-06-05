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

addTestGame1 = () => {
  let testBody = { id: "test1", name: "Player1", numberOfChips: 1000 };
  let testGame = new Game(testBody);
  testGame.addPlayer(testBody.name, testBody.numberOfChips);

  games[testGame.id] = testGame;
};
addTestGame2 = () => {
  let testBody = { id: "test2", name: "Player1", numberOfChips: 1000 };
  let testGame = new Game(testBody);
  testGame.addPlayer(testBody.name, testBody.numberOfChips);
  testGame.addPlayer("Player2", 2000);

  games[testGame.id] = testGame;
};
addTestGame3 = () => {
  let testBody = { id: "test3", name: "Player1", numberOfChips: 1000 };
  let testGame = new Game(testBody);
  testGame.addPlayer(testBody.name, testBody.numberOfChips);
  testGame.addPlayer("Player2", 2000);
  testGame.addPlayer("Player3", 2000);

  games[testGame.id] = testGame;
};
addTestGame4 = () => {
  let testBody = { id: "test4", name: "Player1", numberOfChips: 1000 };
  let testGame = new Game(testBody);
  testGame.addPlayer(testBody.name, testBody.numberOfChips);
  testGame.addPlayer("Player2", 2000);
  testGame.addPlayer("Player3", 2000);
  testGame.addPlayer("Player4", 2000);

  games[testGame.id] = testGame;
};
addTestGame5 = () => {
  let testBody = { id: "test5", name: "Player1", numberOfChips: 1000 };
  let testGame = new Game(testBody);
  testGame.addPlayer(testBody.name, testBody.numberOfChips);
  testGame.addPlayer("Player2", 2000);
  testGame.addPlayer("Player3", 2000);
  testGame.addPlayer("Player4", 2000);
  testGame.addPlayer("Player5", 2000);

  games[testGame.id] = testGame;
};

// addTestGame1();
addTestGame2();
// addTestGame3();
// addTestGame4();
// addTestGame5();

app.get("/games", (req, res) => {
  res.send(games);
});

app.post("/create_game", (req, res) => {
  let newGame = new Game(req.body);
  newGame.addPlayer(req.body.name, req.body.numberOfChips);
  games[newGame.id] = newGame;
  console.log("received: " + JSON.stringify(req.body));
});

app.post("/bet", (req, res) => {
  console.log("/bet called");
  console.log("received: " + JSON.stringify(req.body));
  games[req.body.id].bet(req.body.player, Number(req.body.betAmount));
  res.send(JSON.stringify(games[req.body.id]));
});

app.post("/take", (req, res) => {
  console.log("/bet called");
  console.log("received: " + JSON.stringify(req.body));
  games[req.body.id].take(req.body.player, Number(req.body.takeAmount));
  res.send(JSON.stringify(games[req.body.id]));
});

app.post("/join_game", (req, res) => {
  try {
    if (games.hasOwnProperty(games[req.body.id].id)) {
      let g = games[req.body.id];
      g.addPlayer(req.body.name, req.body.numberOfChips);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

app.get("/game", (req, res) => {
  let g = games[req.body.id];
  g.addPlayer(req.body.name, req.body.numberOfChips);
  console.log("received: " + JSON.stringify(req.body));
});

app.post("/table", (req, res) => {
  console.log(JSON.stringify(req.body));
  try {
    if (games.hasOwnProperty(games[req.body.id].id)) {
      let g = games[req.body.id];
      if (g.players.hasOwnProperty(req.body.player)) {
        res.send(JSON.stringify(games[req.body.id]));
      } else {
        console.log("Player found.");
        res.sendStatus(404);
      }
    } else {
      // console.log("Table not found");
      res.sendStatus(404);
    }
  } catch (e) {
    // console.log(e);
    res.sendStatus(404);
  }
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
