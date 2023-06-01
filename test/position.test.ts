import { MarsMap } from "../src/classes/map.class";
import { Rover } from "../src/classes/rover.class";
import { Direction } from "../src/enums/direction.enum";
import { Point } from "../src/types/point.type";
import { RoverBuilder } from "./utilities/rover.builder";

const obstacles: Point[] = [{x:1, y:1}, {x:15, y:15}, {x:20, y:20}, {x:25, y:25}]

type CaseMovement = {
    basePosition: Point;
    baseDirection: Direction;
    finalPosition: number;
}

const casesForForwardx: CaseMovement[] = [
    {
        basePosition:{
            x: 50,
            y: 0,
        },
        baseDirection: Direction.East,
        finalPosition: -50 
    },
    {
      basePosition:{    
          x: 49,
          y: 0,
      },
      baseDirection: Direction.East,
      finalPosition: 50
    },
    {
      basePosition:{    
          x: -50,
          y: 0,
      },
      baseDirection: Direction.West,
      finalPosition: 50
    },
    {
      basePosition:{    
          x: -49,
          y: 0,
      },
      baseDirection: Direction.West,
      finalPosition: -50
    },
]

const casesForForwardy: CaseMovement[] = [
    {
        basePosition:{    
            x: 0,
            y: -50,
        },
        baseDirection: Direction.South,
        finalPosition: 50
    },
    {
        basePosition:{    
            x: 0,
            y: -49,
        },
        baseDirection: Direction.South,
        finalPosition: -50
    },
    {
        basePosition:{    
            x: 0,
            y: 50,
        },
        baseDirection: Direction.North,
        finalPosition: -50
    },
    {
        basePosition:{    
            x: 0,
            y: 49,
        },
        baseDirection: Direction.North,
        finalPosition: 50
    },
];


const casesForBackwardx: CaseMovement[] = [
    {
        basePosition:{
            x: -50,
            y: 0,
        },
        baseDirection: Direction.East,
        finalPosition: 50 
    },
    {
        basePosition: {    
            x: -49,
            y: 0,
        },
        baseDirection: Direction.East,
        finalPosition: -50
    },
    {
        basePosition: {    
            x: 50,
            y: 0,
        },
        baseDirection: Direction.West,
        finalPosition: -50
    },
    {
        basePosition: {    
            x: 49,
            y: 0,
        },
        baseDirection: Direction.West,
        finalPosition: 50
    },
]

const casesForBackwardy: CaseMovement[] = [
    {
        basePosition: {    
            x: 0,
            y: 50,
        },
        baseDirection: Direction.South,
        finalPosition: -50
    },
    {
        basePosition: {    
            x: 0,
            y: 49,
        },
        baseDirection: Direction.South,
        finalPosition: 50
    },
    {
        basePosition: {    
            x: 0,
            y: -50,
        },
        baseDirection: Direction.North,
        finalPosition: 50
    },
    {
        basePosition: {    
            x: 0,
            y: -49,
        },
        baseDirection: Direction.North,
        finalPosition: -50
    },
]

describe('forward function x', () => {
    test.each<CaseMovement>(casesForForwardx)(`it should go forward to $args.finalPosition from $args.basePosition `, (args: CaseMovement) => {
        const map = new MarsMap(50, 50, obstacles);

          const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(args.basePosition)
          .setDirection(args.baseDirection)
          .build();
          
        const positionForward = rover.forward()
        expect(positionForward.x).toEqual(args.finalPosition);
    })
});

describe('forward function y', () => {
    test.each<CaseMovement>(casesForForwardy)(`it should go forward to $args.finalPosition from $args.basePosition `, (args: CaseMovement) => {
        const map = new MarsMap(50, 50, obstacles);

          const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(args.basePosition)
          .setDirection(args.baseDirection)
          .build();
          
        const positionForward = rover.forward()
        expect(positionForward.y).toEqual(args.finalPosition);
    })
});

describe('backward function', () => {
    test.each<CaseMovement>(casesForBackwardx)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
        const map = new MarsMap(50, 50, obstacles);

          const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(args.basePosition)
          .setDirection(args.baseDirection)
          .build();
          
        const positionBackward = rover.backward()
        expect(positionBackward.x).toEqual(args.finalPosition);
    })
});

describe('backward function', () => {
    test.each<CaseMovement>(casesForBackwardy)('it should go backward $args.finalPosition from $args.basePosition', (args: CaseMovement) => {
        const map = new MarsMap(50, 50, obstacles);

          const rover = new RoverBuilder()
          .setMap(map)
          .setPosition(args.basePosition)
          .setDirection(args.baseDirection)
          .build();
          
        const positionBackward = rover.backward()
        expect(positionBackward.y).toEqual(args.finalPosition);
    })
});