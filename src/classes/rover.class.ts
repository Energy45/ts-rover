import { Point } from "../types/point.type";
import { Entity } from "./entity.class";
import { Direction } from "../enums/direction.enum";

export class Rover extends Entity {
    /**
     * This function forward the Rover.
     * 1. Determine direction
     * 2. Change position
     */
    forward(): Point {
        switch(this.position.direction) {
            case Direction.East: this.position.x++;
            break;
            case Direction.West: this.position.x--;
            break;
            case Direction.North: this.position.y++;
            break;
            case Direction.South: this.position.y--;
            break;
        }

        return this.position;
    }

    /**
     * This function backward the Rover.
     * 1. Determine direction
     * 2. Change position
     */
    backward(): Point {
        switch(this.position.direction) {
            case Direction.East: this.position.x--;
            break;
            case Direction.West: this.position.x++;
            break;
            case Direction.North: this.position.y--;
            break;
            case Direction.South: this.position.y++;
            break;
        }

        return this.position;
    }
    turnRight(): Point {
        switch(this.position.direction) {
            case Direction.East: this.position.direction = Direction.South;
            break;
            case Direction.West: this.position.direction = Direction.North;
            break;
            case Direction.North: this.position.direction = Direction.East;
            break;
            case Direction.South: this.position.direction = Direction.West;
            break;
        }
        return this.position;
    }
    turnLeft(): Point {
        switch(this.position.direction) {
            case Direction.East: this.position.direction = Direction.North;
            break;
            case Direction.West: this.position.direction = Direction.South;
            break;
            case Direction.North: this.position.direction = Direction.West;
            break;
            case Direction.South: this.position.direction = Direction.East;
            break;
        }
        return this.position;
    }
    
}