class Game {
  constructor(obj) {
    this.id = obj.id;
    this.pot = obj.pot;
    this.logs = [];
    this.players = [];

    this.addPlayer = (name, amount) => {
      this.players.push({ name, amount });
    };
    this.bet = (player, amount) => {};
    this.take = (player, amount) => {};
  }
}

module.exports = Game;
