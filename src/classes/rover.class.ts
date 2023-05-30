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
            case Direction.East: 
                if( this.position.x === this.map.xmax ){
                    this.position.x = this.map.xmin
                }else{
                    this.position.x++;
                }
            break;
            
            case Direction.West: 
                if( this.position.x === this.map.xmin ){
                    this.position.x = this.map.xmax
                }else{
                    this.position.x--;
                }
            break;
            
            case Direction.North: 
                if( this.position.y === this.map.ymax ){
                    this.position.y = this.map.ymin
                }else{
                    this.position.y++;
                }
            break;

            case Direction.South: 
                if( this.position.y === this.map.ymin ){
                    this.position.y = this.map.ymax
                }else{
                    this.position.y--;
                }
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
            case Direction.East:
                if (this.position.x === this.map.xmax ){
                    this.position.x = this.map.xmin
                } else {
                    this.position.x++;
                }
            break;

            case Direction.West:
                if (this.position.x === this.map.xmin){
                    this.position.x = this.map.xmax
                } else {
                    this.position.x--;
                }
            break;

            case Direction.North:
                if (this.position.y === this.map.ymax){
                    this.position.y = this.map.ymin
                } else {
                    this.position.y--;
                }
            break;

            case Direction.South: 
                if (this.position.y === this.map.ymin){
                    this.position.y = this.map.ymax
                } else {
                    this.position.y++;
                }
            break;
        }
        return this.position;
    }

    /**
     * This function determine new direction of the Rover.
     * 1. Change direction
     */
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

    /**
     * This function determine new direction of the Rover.
     * 1. Change direction
     */
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
