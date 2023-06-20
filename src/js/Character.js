export default class Character {
  constructor(name) {
    this.name = name;
    this.attackMeaning = 50;
    this.stonedCondition = false;
  }

  get attack() {
    return (distanceInCells) => {
      let attack = this.attackMeaning - 10 * (distanceInCells - 1);
      if (this.stoned) {
        attack -= Math.log2(distanceInCells) * 5;
      }
      attack = Math.round(attack);
      return attack;
    };
  }

  set attack(meaning) {
    this.attackMeaning = meaning;
  }

  get stoned() {
    return this.stonedCondition;
  }

  set stoned(datura) {
    this.stonedCondition = datura;
  }
}
