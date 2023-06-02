import { MarsMap } from "../src/classes/map.class";
import { RoverBuilder } from "./utilities/rover.builder";
import { Position } from "../src/classes/position.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Point } from "../src/classes/point.class";

const obstacles: Point[] = [new Point(1, 1), new Point(15, 15), new Point(20, 20), new Point(25, 25)]

export type CaseMovement = {
	basePosition: Position;
	finalPosition: Position;
}

const casesForForwardx: CaseMovement[] = [
	{
		basePosition: new Position(50, 0, Orientation.East),
		finalPosition: new Position(-50, 0, Orientation.East)
	},
	{
		basePosition: new Position(49, 0, Orientation.East),
		finalPosition: new Position(50, 0, Orientation.East)
	},
	{
		basePosition: new Position(-50, 0, Orientation.West),
		finalPosition: new Position(50, 0, Orientation.East)
	},
	{
		basePosition: new Position(-49, 0, Orientation.West),
		finalPosition: new Position(-50, 0, Orientation.East)
	},
]

const casesForForwardy: CaseMovement[] = [
	{
		basePosition: new Position(0, -50, Orientation.South),
		finalPosition: new Position(0, 50, Orientation.South)
	},
	{
		basePosition: new Position(0, -49, Orientation.South),
		finalPosition: new Position(0, -50, Orientation.South)
	},
	{
		basePosition: new Position(0, 50, Orientation.North),
		finalPosition: new Position(0,-50, Orientation.North)
	},
	{
		basePosition: new Position(0, 49, Orientation.North),
		finalPosition: new Position(0, 50, Orientation.North)
	},
];


const casesForBackwardx: CaseMovement[] = [
	{
		basePosition: new Position(-50, 0, Orientation.East),
		finalPosition: new Position(50, 0, Orientation.East),
	},
	{
		basePosition: new Position(-49, 0, Orientation.East),
		finalPosition: new Position(-50, 0, Orientation.East),
	},
	{
		basePosition: new Position(50, 0, Orientation.West),
		finalPosition: new Position(-50, 0, Orientation.West),
	},
	{
		basePosition: new Position(49, 0, Orientation.West),
		finalPosition: new Position(50, 0, Orientation.West),
	},
]

const casesForBackwardy: CaseMovement[] = [
	{
		basePosition: new Position(0, 50, Orientation.South),
		finalPosition: new Position(0, -50, Orientation.South),
	},
	{
		basePosition: new Position(0, 49, Orientation.South),
		finalPosition: new Position(0, 50, Orientation.South),
	},
	{
		basePosition: new Position(0, -50, Orientation.North),
		finalPosition: new Position(0, 50, Orientation.South),
	},
	{
		basePosition: new Position(0, -49, Orientation.North),
		finalPosition: new Position(0, -50, Orientation.South),
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
		expect(position).toEqual(args.finalPosition);
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
		expect(position).toEqual(args.finalPosition);
	})
});

describe('backward function x', () => {
	test.each<CaseMovement>(casesForBackwardx)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.backward()
		expect(position).toEqual(args.finalPosition);
	})
});

describe('backward function y', () => {
	test.each<CaseMovement>(casesForBackwardy)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(args.basePosition)
			.build();

		const position = rover.backward()
		expect(position).toEqual(args.finalPosition);
	})
});
