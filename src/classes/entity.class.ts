import { Point } from "../types/point.type";
import { Direction } from "../enums/direction.enum";
import { MarsMap } from "./map.class";

export abstract class Entity{
    protected map: MarsMap;
	protected position : Point;

    constructor(map: MarsMap, position: Point){
        this.map = map;
        this.position = position;
    }

    abstract forward(): Point;
    abstract backward(): Point;
    abstract turnRight(): Point;
    abstract turnLeft(): Point;

}