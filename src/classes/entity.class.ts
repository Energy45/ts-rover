import { Point } from "../types/point.type";
import { Direction } from "../enums/direction.enum";

export abstract class Entity{
    protected map: MarsMap;
	protected position : Point;

    constructor(map: any, position: Point){
        this.map = map;
        this.position = position;
    }

    abstract forward(): Point;
    abstract backward(): Point;
    abstract turnRight(): Point;
    abstract turnLeft(): Point;

}