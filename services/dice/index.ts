import RollList from './rollList';

class Dice {
  private rolls: RollList;
  constructor(private faces: number) {
    this.rolls = new RollList(this);
  }

  roll(quantity: number): RollList {
    for (let i = 0; i < quantity; i++) {
      this.rolls.push(this.generateRandomInteger());
    }
    return this.rolls;
  }

  // TODO: implement a better random generator  <10-09-21, barba> //
  generateRandomInteger(): number {
    return Math.floor(Math.random() * this.faces) + 1;
  }
}

export default Dice;
