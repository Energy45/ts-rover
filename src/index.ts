import { Direction } from "./enums/direction.enum";
import { Rover } from "./classes/rover.class";
import { Point } from "./types/point.type";
import { MarsMap } from "./classes/map.class";
import { ObstacleHitException } from "./exceptions/obstacle-hit.exception";

const obstacles: Point[] = [{x:1, y:1}, {x:15, y:15}, {x:20, y:20}, {x:25, y:25}]
const map = new MarsMap(100, 100, obstacles);
const basePosition: Point = {
  x: 0,
  y: 0,
}
const direction = Direction.East;
const rover = new Rover(map, basePosition, direction);

try {
  rover.handleCommand('AGADAARGR');
} catch(error) {
  if (error instanceof ObstacleHitException) {
    console.log(`Rover found obstacle at : "(${error.position.x},${error.position.y})"` )
  } else {
    console.error('Unexpected error');
    process.exit(-1);
  }
}




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
