import { Direction } from "./enums/direction.enum";
import { Rover } from "./classes/rover.class";
import { Point } from "./types/point.type";
import { MarsMap } from "./classes/map.class";

const map = new MarsMap(100, 100);
const basePosition: Point = {
  x: 0,
  y: 0,
  direction: Direction.East,
}
const rover = new Rover(map, basePosition);

console.log(rover.forward())
console.log(rover.turnRight())
console.log(rover.turnRight())
console.log(rover.forward())
console.log(rover.forward())
console.log(rover.backward())
console.log(rover.turnLeft())
console.log(rover.backward())



// export const config = Object.freeze({
//   // Map
//   MAP_WIDTH_MIN: -50,
//   MAP_WIDTH_MAX: 50,
//   MAP_HEIGHT_MIN: -50,
//   MAP_HEIGHT_MAX: 50,

//   // Rover
//   ROVER_START_X: 0,
//   ROVER_START_Y: 0,
//   ROVER_START_DIRECTION: "N",
//   ROVER_START_VITESSE: 1,
// });
