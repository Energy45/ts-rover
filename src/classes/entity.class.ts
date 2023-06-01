import { Point } from "../types/point.type";
import { Direction } from "../enums/direction.enum";
import { MarsMap } from "./map.class";

export abstract class Entity{
    protected map: MarsMap;
	protected position : Point;
    protected direction: Direction;

    constructor(map: MarsMap, position: Point, direction: Direction){
        this.map = map;
        this.position = position;
        this.direction = direction;
    }

    abstract forward(): Point;
    abstract backward(): Point;
    abstract turnRight(): [Point, Direction];
    abstract turnLeft(): [Point, Direction];

}