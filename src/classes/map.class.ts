import { Position } from "./position.class";
import { Point } from "./point.class";

export class MarsMap {
	public xmin: number;
	public xmax: number;
	public ymin: number;
	public ymax: number;
	public obstacles: Point[]

	constructor(width: number, height: number, obstacles: Point[]) {
		this.xmin = width * -1;
		this.xmax = width;
		this.ymin = height * -1;
		this.ymax = height;
		this.obstacles = obstacles;
	}

	isObstacleFree(position: Position): boolean {
		return !this.obstacles.find(o => {
			return o._x === position._x && o._y === position._y;
		});
	}
}
