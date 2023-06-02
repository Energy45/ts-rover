import { Orientation } from "./enums/orientation.enum";
import { Rover } from "./classes/rover.class";
import { MarsMap } from "./classes/map.class";
import { ObstacleHitException } from "./exceptions/obstacle-hit.exception";
import { Point } from "./classes/point.class";
import { Position } from "./classes/position.class";
import { CommandInterpretor } from "./classes/command-interpretor.class";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]
const map = new MarsMap(100, 100, obstacles);
const defaultPosition = new Position(0, 0, Orientation.East)
const rover = new Rover(map, defaultPosition);

const commandInterpretor = new CommandInterpretor();

try {
  console.log(commandInterpretor.handleCommand(rover, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'));
} catch(error) {
  if (error instanceof ObstacleHitException) {
    console.log(`Rover found obstacle at : "(${error.position._x},${error.position._y})"` )
  } else {
    console.error('Unexpected error');
    process.exit(-1);
  }
}
