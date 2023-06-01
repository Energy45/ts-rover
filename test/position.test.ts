import { MarsMap } from "../src/classes/map.class";
import { RoverBuilder } from "./utilities/rover.builder";
import { Position } from "../src/classes/position.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Point } from "../src/classes/point.class";

const obstacles: Point[] = [new Point(1, 1), new Point(15, 15), new Point(20, 20), new Point(25, 25)]

type CaseMovement = {
	basePosition: Position;
	finalPosition: number;
}

const casesForForwardx: CaseMovement[] = [
	{
		basePosition: new Position(50, 0, Orientation.East),
		finalPosition: -50
	},
	{
		basePosition: new Position(49, 0, Orientation.East),
		finalPosition: 50
	},
	{
		basePosition: new Position(-50, 0, Orientation.West),
		finalPosition: 50
	},
	{
		basePosition: new Position(-49, 0, Orientation.West),
		finalPosition: -50
	},
]

const casesForForwardy: CaseMovement[] = [
	{
		basePosition: new Position(0, -50, Orientation.South),
		finalPosition: 50
	},
	{
		basePosition: new Position(0, -49, Orientation.South),
		finalPosition: -50
	},
	{
		basePosition: new Position(0, 50, Orientation.North),
		finalPosition: -50
	},
	{
		basePosition: new Position(0, 49, Orientation.North),
		finalPosition: 50
	},
];


const casesForBackwardx: CaseMovement[] = [
	{
		basePosition: new Position(-50, 0, Orientation.East),
		finalPosition: 50
	},
	{
		basePosition: new Position(-49, 0, Orientation.East),
		finalPosition: -50
	},
	{
		basePosition: new Position(50, 0, Orientation.West),
		finalPosition: -50
	},
	{
		basePosition: new Position(49, 0, Orientation.West),
		finalPosition: 50
	},
]

const casesForBackwardy: CaseMovement[] = [
	{
		basePosition: new Position(0, 50, Orientation.South),
		finalPosition: -50
	},
	{
		basePosition: new Position(0, 49, Orientation.South),
		finalPosition: 50
	},
	{
		basePosition: new Position(0, -50, Orientation.North),
		finalPosition: 50
	},
	{
		basePosition: new Position(0, -49, Orientation.North),
		finalPosition: -50
	},
]

describe('forward function x', () => {
	test.each<CaseMovement>(casesForForwardx)(`it should go forward to $args.finalPosition from $args.basePosition `, (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.forward()
		expect(position._x).toEqual(args.finalPosition);
	})
});

describe('forward function y', () => {
	test.each<CaseMovement>(casesForForwardy)(`it should go forward to $args.finalPosition from $args.basePosition `, (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.forward()
		expect(position._y).toEqual(args.finalPosition);
	})
});

describe('backward function', () => {
	test.each<CaseMovement>(casesForBackwardx)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.backward()
		expect(position._x).toEqual(args.finalPosition);
	})
});

describe('backward function', () => {
	test.each<CaseMovement>(casesForBackwardy)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.backward()
		expect(position._y).toEqual(args.finalPosition);
	})
});
