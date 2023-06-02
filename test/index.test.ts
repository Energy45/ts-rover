import { MarsMap } from "../src/classes/map.class";
import { ObstacleHitException } from "../src/exceptions/obstacle-hit.exception";
import { RoverBuilder } from "./utilities/rover.builder"
import { Position } from "../src/classes/position.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Point } from "../src/classes/point.class";
import { CommandInterpretor } from "../src/classes/command-interpretor.class";
import { CaseMovement } from "./position.test";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]

export type CaseMovementWithInterpretor = {
	command: string;
} & CaseMovement;

const caseForInterpretor: CaseMovementWithInterpretor[] = [
	{
		basePosition: new Position(0, 0, Orientation.East),
		finalPosition: new Position(3, 3, Orientation.North),
		command: 'AAAGAAA',
	},
	{
		basePosition: new Position(0, 0, Orientation.East),
		finalPosition: new Position(-2, -1, Orientation.West),
		command: 'RGRGA',
	},
]

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
	});

	test.each<CaseMovementWithInterpretor>(caseForInterpretor)
	(`should return position x $finalPosition._x , 
	y $finalPosition._y , orientation : $finalPosition._orientation, 
	command $command `, ({ basePosition, finalPosition, command }: CaseMovementWithInterpretor) => {
		const map = new MarsMap(50, 50, obstacles);

		const rover = new RoverBuilder()
			.setMap(map)
			.setPosition(basePosition)
			.build();
		
		const commandInterpretor = new CommandInterpretor();
		
		const positionReturned = commandInterpretor.handleCommand(rover, command);

		expect(positionReturned).toEqual(finalPosition);
	});
	
});
