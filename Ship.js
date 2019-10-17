export default class Ship {
  constructor(type, hitPoints, hitPointLoss){
    this.type = type;
    this.hitPoints = hitPoints;
    this.hitPointLoss = hitPointLoss;
  }

  hit() {
    this.hitPoints -= this.hitPointLoss;
  }
}