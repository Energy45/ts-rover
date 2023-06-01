import { MarsMap } from "./map.class";
import { Position } from "./position.class";

export abstract class Entity{
    protected map: MarsMap;
	protected _position : Position

    constructor(map: MarsMap, position: Position){
        this.map = map;
        this._position = position
    }

    abstract forward(): Position;
    abstract backward(): Position;
    abstract turnRight(): Position;
    abstract turnLeft(): Position;
}
