import { MarsMap } from "../src/classes/map.class";
import { Rover } from "../src/classes/rover.class";
import { Direction } from "../src/enums/direction.enum";
import { Point } from "../src/types/point.type";
import { RoverBuilder } from "./utilities/rover.builder"

const obstacles: Point[] = [{x:1, y:1}, {x:15, y:15}, {x:20, y:20}, {x:25, y:25}]

const casesForTurnLeft = [
    [
        Direction.East,
        Direction.North,
    ],
    [
        Direction.North,
        Direction.West,
    ],
    [
        Direction.West,
        Direction.South,
    ],
    [
        Direction.South,
        Direction.East,
    ]
]

const casesForTurnRight = [
    [
        Direction.North,
        Direction.East,
    ],
    [
        Direction.West,
        Direction.North,
    ],
    [
        Direction.South,
        Direction.West,
    ],
    [
        Direction.East,
        Direction.South,
    ]
]


describe('turnLeft function', () => {
    test.each(casesForTurnLeft)('it should change direction to $targetDirection ', (baseDirection, targetDirection) => {
        const map = new MarsMap(50, 50, obstacles);
        const basePosition: Point = {
          x: 0,
          y: 0,
        }
        const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(basePosition)
          .setDirection(baseDirection)
          .build();
          
        const [position, direction] = rover.turnLeft();
        expect(direction).toEqual(targetDirection);
    });
})

describe('turnRight function', () => {
    test.each(casesForTurnRight)('it should change direction to $targetDirection ', (baseDirection, targetDirection) => {
        const map = new MarsMap(50, 50, obstacles);
        const basePosition: Point = {
          x: 0,
          y: 0,
        }
        const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(basePosition)
          .setDirection(baseDirection)
          .build();
          
        const [position, direction] = rover.turnRight();
        expect(direction).toEqual(targetDirection);
    });
});