import { Entity } from "./entity.class";
import { Orientation } from "../enums/orientation.enum";
import { ObstacleHitException } from "../exceptions/obstacle-hit.exception";
import { Position } from "./position.class";

export class Rover extends Entity {
	/**
	 * This function forward the Rover.
	 * 1. Determine direction
	 * 2. Change position
	 */
	forward(): Position {
		let hasObstacle: boolean;
		switch (this._position._orientation) {
			case Orientation.East:
				if (this._position._x === this.map.xmax) {
					this._position._x = this.map.xmin
				} else {
					const newPosition = new Position(this._position._x + 1, this._position._y, this._position._orientation)

					hasObstacle = !this.map.isObstacleFree(newPosition);

					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;
			case Orientation.West:
				if (this._position._x === this.map.xmin) {
					this._position._x = this.map.xmax
				} else {
					const newPosition = new Position(this._position._x - 1, this._position._y, this._position._orientation)

					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;

			case Orientation.North:
				if (this._position._y === this.map.ymax) {
					this._position._y = this.map.ymin
				} else {
					const newPosition = new Position(this._position._x, this._position._y + 1, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;

			case Orientation.South:
				if (this._position._y === this.map.ymin) {
					this._position._y = this.map.ymax
				} else {
					const newPosition = new Position(this._position._x, this._position._y - 1, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;
		}
		return this._position;
	}

	/**
	 * This function backward the Rover.
	 * 1. Determine direction
	 * 2. Change position
	 */
	backward(): Position {
		let hasObstacle: boolean;
		switch (this._position._orientation) {
			case Orientation.East:
				if (this._position._x === this.map.xmin) {
					this._position._x = this.map.xmax
				} else {
					const newPosition = new Position(this._position._x - 1, this._position._y, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;

			case Orientation.West:
				if (this._position._x === this.map.xmax) {
					this._position._x = this.map.xmin
				} else {
					const newPosition = new Position(this._position._x + 1, this._position._y, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;

			case Orientation.North:
				if (this._position._y === this.map.ymin) {
					this._position._y = this.map.ymax
				} else {
					const newPosition = new Position(this._position._x, this._position._y - 1, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;

			case Orientation.South:
				if (this._position._y === this.map.ymax) {
					this._position._y = this.map.ymin
				} else {
					const newPosition = new Position(this._position._x, this._position._y + 1, this._position._orientation)
					hasObstacle = !this.map.isObstacleFree(newPosition);
					if (hasObstacle) throw new ObstacleHitException(newPosition);
					this._position.setPoint(newPosition._x, newPosition._y)
				}
				break;
		}
		return this._position;
	}

	/**
	 * This function determine new direction of the Rover.
	 * 1. Change direction
	 */
	turnRight(): Position {
		switch (this._position._orientation) {
			case Orientation.East:
				this._position._orientation = Orientation.South;
				break;
			case Orientation.West:
				this._position._orientation = Orientation.North;
				break;
			case Orientation.North:
				this._position._orientation = Orientation.East;
				break;
			case Orientation.South:
				this._position._orientation = Orientation.West;
				break;
		}
		return this._position;
	}

	/**
	 * This function determine new direction of the Rover.
	 * 1. Change direction
	 */
	turnLeft(): Position {
		switch (this._position._orientation) {
			case Orientation.East:
				this._position._orientation = Orientation.North;
				break;
			case Orientation.West:
				this._position._orientation = Orientation.South;
				break;
			case Orientation.North:
				this._position._orientation = Orientation.West;
				break;
			case Orientation.South:
				this._position._orientation = Orientation.East;
				break;
		}
		return this._position;
	}
}
