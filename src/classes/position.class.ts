import { Point } from "./point.class";
import { Orientation } from "../enums/orientation.enum";

export class Position extends Point {
	public _orientation: Orientation;

	constructor(x: number, y: number, orientation: Orientation) {
		super(x, y)
		this._orientation = orientation;
	}
}
