// import { MarsMap } from "../src/classes/map.class";
// import { Rover } from "../src/classes/rover.class";
// import { Direction } from "../src/enums/direction.enum";
// import { ObstacleHitException } from "../src/exceptions/obstacle-hit.exception";
// import { Point } from "../src/types/point.type";
// import { RoverBuilder } from "./utilities/rover.builder"

// const obstacles: Point[] = [{x:1, y:1}, {x:15, y:15}, {x:20, y:20}, {x:25, y:25}]

// describe('handleCommand function', () => {
//     test('', () => {
//         const map = new MarsMap(50, 50, obstacles);
//         const basePosition: Point = {
//           x: 0,
//           y: 0,
//         }
//         const rover = new RoverBuilder()
//           .setMap(map)
//           .setPosition(basePosition)
//           .setDirection(Direction.East)
//           .build();

//         const t = () => {
//             rover.handleCommand('AGA');
//         }

//         expect(t).toThrow(ObstacleHitException);
//     })

//     test('', () => {
//         const map = new MarsMap(50, 50, obstacles);
//         const basePosition: Point = {
//           x: 0,
//           y: 0,
//         }
//         const rover = new RoverBuilder()
//           .setMap(map)
//           .setPosition(basePosition)
//           .setDirection(Direction.East)
//           .build();

//         const t = () => {
//             rover.handleCommand('AAA');
//         }

//         expect(t).toBe(t);
//     })
// })