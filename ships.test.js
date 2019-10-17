import Ship from "./Ship"
import reset, { shoot } from "./ships"

describe("Mothership", () => {
  let motherShip = new Ship ("mother", 100, 9);
  let defenceShip = new Ship ("defence", 80, 10);
  let attackShip = new Ship ("attack", 45, 12);
  
  let numMothers = 1
  let numDefences = 5
  let numAttackers = 8

  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  test("Value change after hit", () => {
    mother.hit();
    expect(mother.hitPoints).toBe(91);
  });

  test("Reset button sets scores to zero", () =>
  {
    shoot()
    expect(allShips[7].hitPoints).toBe(33)
    reset()
    expect(allShips[7].hitPoints).toBe(45)

  })
})


