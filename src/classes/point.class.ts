export class Point {
	public _x: number;
	public _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	setPoint(x: number, y: number): Point {
		this._x = x;
		this._y = y;
		return this;
	}
}
