import { Orientation } from "../../src/enums/orientation.enum";
import { Rover } from "../../src/classes/rover.class";
import { MarsMap } from "../../src/classes/map.class";
import { Point } from "../../src/classes/point.class";
import { Position } from "../../src/classes/position.class";

export class RoverBuilder {

  private _obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]
  private _map = new MarsMap(100, 100, this._obstacles);
  private _position = new Position(0, 0, Orientation.East)

  setPosition(position: Position){
    return this._position = position;
  }

  build(): Rover {
    return new Rover(this._map, this._position);
  }
}
