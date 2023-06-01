import { Orientation } from "./enums/orientation.enum";
import { Rover } from "./classes/rover.class";
import { MarsMap } from "./classes/map.class";
import { ObstacleHitException } from "./exceptions/obstacle-hit.exception";
import { Point } from "./classes/point.class";
import { Position } from "./classes/position.class";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]
const map = new MarsMap(100, 100, obstacles);
const defaultPosition = new Position(0, 0, Orientation.East)
const rover = new Rover(map, defaultPosition);

try {
  // console.log(rover.forward()) // x = 1, y = 0, EAST
  // console.log(rover.turnLeft()) // x = 1, y = 0, NORTH
  // console.log(rover.forward()) // x = 1, y = 1, NORTH
  // console.log(rover.turnRight())
  // console.log(rover.forward())
  // console.log(rover.forward())
  // console.log(rover.backward())
  // console.log(rover.turnLeft())
  // console.log(rover.backward())
  rover.handleCommand('AGADAARGR');
} catch(error) {
  if (error instanceof ObstacleHitException) {
    console.log(`Rover found obstacle at : "(${error.position._x},${error.position._y})"` )
  } else {
    console.error('Unexpected error');
    process.exit(-1);
  }
}
