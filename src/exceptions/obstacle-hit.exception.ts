import { Point } from "../types/point.type";

export class ObstacleHitException extends Error {
    position: Point;
    
    constructor(position: Point) {
        super();

        this.position = position;
    }
}