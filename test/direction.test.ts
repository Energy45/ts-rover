import { MarsMap } from "../src/classes/map.class";
import { RoverBuilder } from "./utilities/rover.builder"
import { Point } from "../src/classes/point.class";
import { Orientation } from "../src/enums/orientation.enum";
import { Position } from "../src/classes/position.class";

const obstacles: Point[] = [new Point(1,1), new Point(15,15), new Point(20,20), new Point(25,25)]

const casesForTurnLeft = [
    [
        Orientation.East,
        Orientation.North,
    ],
    [
        Orientation.North,
        Orientation.West,
    ],
    [
        Orientation.West,
        Orientation.South,
    ],
    [
        Orientation.South,
        Orientation.East,
    ]
]

const casesForTurnRight = [
    [
        Orientation.North,
        Orientation.East,
    ],
    [
        Orientation.West,
        Orientation.North,
    ],
    [
        Orientation.South,
        Orientation.West,
    ],
    [
        Orientation.East,
        Orientation.South,
    ]
]


describe('turnLeft function', () => {
    test.each(casesForTurnLeft)('it should change direction to $targetDirection ', (baseDirection, targetDirection) => {
        const map = new MarsMap(50, 50, obstacles);
        const basePosition = new Position(0,0, baseDirection)
        const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(basePosition)
          .build();
          
        const position = rover.turnLeft();
        expect(position._orientation).toEqual(targetDirection);
    });
})

describe('turnRight function', () => {
    test.each(casesForTurnRight)('it should change direction to $targetDirection ', (baseDirection, targetDirection) => {
        const map = new MarsMap(50, 50, obstacles);
        const basePosition = new Position(0,0, baseDirection)

        const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(basePosition)
          .build();
          
        const position = rover.turnRight();
        expect(position._orientation).toEqual(targetDirection);
    });
});
