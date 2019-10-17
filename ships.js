export class Ship {
  constructor(type, hitPoints, hitPointLoss){
    this.type = type;
    this.hitPoints = hitPoints;
    this.hitPointLoss = hitPointLoss;
  }

  hit() {
    this.hitPoints >= this.hitPointLoss ? this.hitPoints -= this.hitPointLoss : this.hitPoints = 0
  }
}

let motherShip = new Ship ("mother", 100, 9);
let defenceShip = new Ship ("defence", 80, 10);
let attackShip = new Ship ("attack", 45, 12);

let numMothers = 1
let numDefences = 5 
let numAttackers = 8

let allShips = []
export function addShips(typeOfShip, numOfShips) {
  for(let index = 0; index < numOfShips; index++){
    if(typeOfShip==motherShip){
      allShips.push(new Ship ("mother", 100, 9));
    } if(typeOfShip==defenceShip){
      allShips.push(new Ship ("defence", 80, 10));
    } else if(typeOfShip==attackShip){
      allShips.push(new Ship ("attack", 45, 12));
    };
  }
} 
addShips(motherShip, numMothers);
addShips(defenceShip, numDefences);
addShips(attackShip, numAttackers);

export function renderShips(){
  let target = document.getElementById("ships")
  target.innerHTML = ""
  for(let index = 0; index < allShips.length; index++){
    target.insertAdjacentHTML("beforeend", `<div id="ship${index}"><h3>${allShips[index].type}</h3><p>${allShips[index].hitPoints}</p></div>`)
  }
}

renderShips()

export function generateRandom(){
  return(Math.floor(Math.random()*allShips.length))
}


export function shoot() {
  let index = generateRandom()
  let ship = allShips[index]
  ship.hit();
  renderShips()
}

export function checkWinStatus() {
  if(allShips[0].hitPoints > allShips[0].hitPointLoss) {
    shoot()
  }
  else {
    alert("You win!")
  }
}

export function reset() {
  allShips=[]
  addShips(motherShip, numMothers);
  addShips(defenceShip, numDefences);
  addShips(attackShip, numAttackers);
  renderShips()
}

const shootButton = document.getElementById("shoot-button")
shootButton.addEventListener("click", checkWinStatus);

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", reset);