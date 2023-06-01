import { Direction } from "../../src/enums/direction.enum";
import { Rover } from "../../src/classes/rover.class";
import { Point } from "../../src/types/point.type";
import { MarsMap } from "../../src/classes/map.class";

export class RoverBuilder {

  private _obstacles: Point[] = [{x:1, y:1}, {x:15, y:15}, {x:20, y:20}, {x:25, y:25}]
  private _map = new MarsMap(100, 100, this._obstacles);
  private _basePosition: Point = {
    x: 10,
    y: 10,
  }
  private _direction = Direction.East;

  setPosition(position: Point): RoverBuilder {
    this._basePosition = position;
    return this;
  }

  setDirection(direction: Direction): RoverBuilder{
    this._direction = direction;
    return this;
  }

  setMap(map: MarsMap): RoverBuilder {
    this._map = map;
    return this;
  }

  build(): Rover {
    return new Rover(this._map, this._basePosition, this._direction);
  }
}