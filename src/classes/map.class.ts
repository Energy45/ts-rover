import { Point } from "../types/point.type";

export class MarsMap {
    public xmin: number;
    public xmax: number;
    public ymin: number;
    public ymax: number;
    public obstacles: Point[];

    constructor(width: number, height: number, obstacles: Point[]) {
        this.xmin = width * -1;
        this.xmax = width;
        this.ymin = height * -1;
        this.ymax = height;
        this.obstacles = obstacles;
    }

    isObstacleFree(p:Point): boolean {
        return !!!this.obstacles.find(o => {
            return o.x === p.x && o.y === p.y;
        });
    }
}