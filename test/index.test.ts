import { MarsMap } from "../src/classes/map.class";
import { ObstacleHitException } from "../src/exceptions/obstacle-hit.exception";
import { RoverBuilder } from "./utilities/rover.builder"
import { Position } from "../src/classes/position.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Point } from "../src/classes/point.class";
import { CommandInterpretor } from "../src/classes/command-interpretor.class";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]

describe('handleCommand function', () => {
	test('should throw ObstacleHitException', () => {
		const map = new MarsMap(50, 50, obstacles);
		const defaultPosition = new Position(0,0, Orientation.East)
		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(defaultPosition)
			.build()

		const commandInterpretor = new CommandInterpretor();

		const fund = () => {
			return commandInterpretor.handleCommand(rover, 'AGA');
		}

		expect(fund).toThrow(ObstacleHitException);
	})

	test('', () => {
		const map = new MarsMap(50, 50, obstacles);
		const defaultPosition = new Position(0,0, Orientation.East)

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(defaultPosition)
			.build();

		const positionExpected = new Position(3,0, Orientation.East);

		const commandInterpretor = new CommandInterpretor();
			
		const positionReturned = commandInterpretor.handleCommand(rover, 'AAA');

		expect(positionReturned).toEqual(positionExpected);
	})
})
