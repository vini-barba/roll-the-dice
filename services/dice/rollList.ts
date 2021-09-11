import Dice from '.';

class RollList extends Array<number> {
  public dropped: number[] = [];

  constructor(protected dice?: Dice) {
    super();
  }

  /**
   * keep a quantity of the highest dice, and discard rest
   * @param {number} quantity - quantity of dice to be kept
   */
  keep(quantity: number) {
    this.validateQuantity(quantity);
    const limit = this.length - quantity;
    return this.drop(limit);
  }

  /**
   * discard a quantity of dice, low to high
   * @param { number } quantity - quantity of dice to be discarded
   */
  drop(quantity: number) {
    this.validateQuantity(quantity);
    const sortedRolls = this.sort();
    for (let i = 0; i < quantity; i++) {
      const lowest = sortedRolls.shift();
      this.dropped.push(lowest!);
    }
    return sortedRolls;
  }

  /**
   * reroll values that are less than or equal the min value passed as param
   * @param {number} min - value to trigger a reroll
   * @param {boolean} recursive - inform if the method need to be runned until no value less than or equal the min value is found
   */
  reroll(min = 1, recursive = false) {
    this.forEach((die, index, originalArray) => {
      if (die <= min) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        const rerolleDie = this.dice?.generateRandomInteger()!;
        originalArray[index] = rerolleDie;
      }
    });

    if (recursive === true) {
      const minValueFound = this.some((die) => die <= min);
      if (minValueFound) {
        this.reroll(min, recursive);
      }
    }

    return this;
  }

  protected validateQuantity(quantity: number) {
    if (quantity < 0) {
      throw new Error('quantity must be greater than or equal to zero');
    }
    if (quantity > this.length) {
      throw new Error(
        'quantity must be less than or equal to the number of rolls',
      );
    }
  }
}

export default RollList;
