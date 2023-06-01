import { MarsMap } from "../src/classes/map.class";
import { ObstacleHitException } from "../src/exceptions/obstacle-hit.exception";
import { RoverBuilder } from "./utilities/rover.builder"
import { Position } from "../src/classes/position.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Point } from "../src/classes/point.class";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]

describe('handleCommand function', () => {
	test('', () => {
		const map = new MarsMap(50, 50, obstacles);
		const defaultPosition = new Position(0,0, Orientation.East)
		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(defaultPosition)
			.build()

		const t = () => {
			rover.handleCommand('AGA');
		}

		expect(t).toThrow(ObstacleHitException);
	})

	test('', () => {
		const map = new MarsMap(50, 50, obstacles);
		const defaultPosition = new Position(0,0, Orientation.East)

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(defaultPosition)
			.build();

		const t = () => {
			rover.handleCommand('AAA');
		}

		expect(t).toBe(t);
	})
})
