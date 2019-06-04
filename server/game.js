class Game {
  constructor(obj) {
    this.id = obj.id;
    this.pot = 0;
    this.logs = [];
    this.players = {};

    this.addPlayer = (name, amount) => {
      this.players[name] = amount;
      this.logJoin(name, amount);
    };
    this.bet = (player, bet) => {
      let newAmount = this.players[player] - bet;
      this.pot += bet;
      this.players[player] = newAmount;
      this.logBet(player, bet);
    };

    this.logBet = (player, bet) => {
      let log = player + " added " + bet + " to the pot.";
      this.logs.unshift(log);
    };
    this.logJoin = (player, amount) => {
      let log = player + " joined the table with " + amount + " chips.";
      this.logs.unshift(log);
    };

    this.logTake = (player, amount) => {
      let log = player + " took " + amount + " from the pot.";
      this.logs.unshift(log);
    };

    this.take = (player, amount) => {
      let newAmount = this.players[player] + amount;
      this.pot -= amount;
      this.players[player] = newAmount;
      this.logTake(player, amount);
    };
  }
}

module.exports = Game;
