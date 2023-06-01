import { Position } from "../classes/position.class";

export class ObstacleHitException extends Error {
    position: Position;
    
    constructor(position: Position) {
        super();
        this.position = position;
    }
}
