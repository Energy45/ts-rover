import { Point } from "../types/point.type";
import { Entity } from "./entity.class";
import { Direction } from "../enums/direction.enum";
import { ObstacleHitException } from "../exceptions/obstacle-hit.exception";

export class Rover extends Entity {
    /**
     * This function forward the Rover.
     * 1. Determine direction
     * 2. Change position
     */
    forward(): Point {
        let hasObstacle: boolean;
        switch(this.direction) {
            case Direction.East: 
                if ( this.position.x === this.map.xmax ){
                    this.position.x = this.map.xmin
                } else {
                    const newPosition: Point = {
                        ...this.position,
                        x: this.position.x + 1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;
            
            case Direction.West: 
                if( this.position.x === this.map.xmin ){
                    this.position.x = this.map.xmax
                }else{
                    const newPosition: Point = {
                        ...this.position,
                        x: this.position.x -1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;
            
            case Direction.North: 
                if( this.position.y === this.map.ymax ){
                    this.position.y = this.map.ymin
                }else{
                    const newPosition: Point = {
                        ...this.position,
                        y:  this.position.y +1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;

            case Direction.South: 
                if( this.position.y === this.map.ymin ){
                    this.position.y = this.map.ymax
                }else{
                    const newPosition: Point = {
                        ...this.position,
                        y:  this.position.y -1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
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
        let hasObstacle: boolean;
        switch(this.direction) {
            case Direction.East:
                if (this.position.x === this.map.xmax ){
                    this.position.x = this.map.xmin
                } else {
                    const newPosition: Point = {
                        ...this.position,
                        x:  this.position.x +1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;

            case Direction.West:
                if (this.position.x === this.map.xmin){
                    this.position.x = this.map.xmax
                } else {
                    const newPosition: Point = {
                        ...this.position,
                        x:  this.position.x -1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;

            case Direction.North:
                if (this.position.y === this.map.ymax){
                    this.position.y = this.map.ymin
                } else {
                    const newPosition: Point = {
                        ...this.position,
                        y: this.position.y -1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
                }
            break;

            case Direction.South: 
                if (this.position.y === this.map.ymin){
                    this.position.y = this.map.ymax
                } else {
                    const newPosition: Point = {
                        ...this.position,
                        y: this.position.y +1,
                    };
                    hasObstacle = !this.map.isObstacleFree(newPosition);
                    if (hasObstacle) throw new ObstacleHitException(newPosition);
                    this.position = newPosition;
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
        switch(this.direction) {
            case Direction.East: this.direction = Direction.South;
            break;
            case Direction.West: this.direction = Direction.North;
            break;
            case Direction.North: this.direction = Direction.East;
            break;
            case Direction.South: this.direction = Direction.West;
            break;
        }
        return this.position;
    }

    /**
     * This function determine new direction of the Rover.
     * 1. Change direction
     */
    turnLeft(): Point {
        switch(this.direction) {
            case Direction.East: this.direction = Direction.North;
            break;
            case Direction.West: this.direction = Direction.South;
            break;
            case Direction.North: this.direction = Direction.West;
            break;
            case Direction.South: this.direction = Direction.East;
            break;
        }
        return this.position;
    }

    handleCommand(command: string) {
        const commandSeparate = command.split('');

        commandSeparate.forEach((cmd) => {
            switch (cmd) {
                case 'A':
                    this.forward();
                    break;
                case 'R':
                    this.backward();
                    break;
                case 'D':
                    this.turnRight();
                    break;
                case 'G':
                    this.turnLeft();
                    break;
                default:
                    break;
            }
        });
    }
}
