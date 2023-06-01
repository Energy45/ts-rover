// import { MarsMap } from "./classes/map.class";
// import { Rover } from "./classes/rover.class";
// import { Direction } from "./enums/direction.enum";
// import { Point } from "./types/point.type";

// describe('turnLeft function', () => {
//     test('it should change direction to North', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnLeft()
//         expect(positionBis.direction).toEqual(Direction.North)
//     })

//     test('it should change direction to West', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnLeft()
//         expect(positionBis.direction).toEqual(Direction.West)
//     })

//     test('it should change direction to South', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnLeft()
//         expect(positionBis.direction).toEqual(Direction.South)
//     })
//     test('it should change direction to East', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnLeft()
//         expect(positionBis.direction).toEqual(Direction.East)
//     })
// })

// describe('turnRight function', () => {
//     test('it should change direction to North', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnRight()
//         expect(positionBis.direction).toEqual(Direction.North)
//     })

//     test('it should change direction to West', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnRight()
//         expect(positionBis.direction).toEqual(Direction.West)
//     })

//     test('it should change direction to South', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnRight()
//         expect(positionBis.direction).toEqual(Direction.South)
//     })
//     test('it should change direction to East', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 0,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.turnRight()
//         expect(positionBis.direction).toEqual(Direction.East)
//     })
// })

// describe('forward function', () => {
//     test('it should pass next side EAST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 50,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.x).toEqual(-50)
//     })

//     test('it should pass forward EAST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 49,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.x).toEqual(50)
//     })
//     test('it should pass forward next side WEST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: -50,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.x).toEqual(50)
//     })

//     test('it should pass forward WEST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: -49,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.x).toEqual(-50)
//     })

//     test('it should pass forward next side SOUTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: -50,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.y).toEqual(50)
//     })

//     test('it should pass forward SOUTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: -49,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.y).toEqual(-50)
//     })

//     test('it should pass forward next side NORTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 50,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.y).toEqual(-50)
//     })

//     test('it should pass forward NORTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 49,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.forward()
//         expect(positionBis.y).toEqual(50)
//     })
// })

// describe('backward function', () => {
//     test('it should pass next side EAST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: -50,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.x).toEqual(50)
//     })

//     test('it should pass backward EAST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 49,
//             y: 0,
//             direction: Direction.East,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.x).toEqual(50)
//     })
//     test('it should pass backward next side WEST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: -50,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.x).toEqual(50)
//     })

//     test('it should pass backward WEST', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: -49,
//             y: 0,
//             direction: Direction.West,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.x).toEqual(-50)
//     })

//     test('it should pass backward next side SOUTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: -50,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.y).toEqual(50)
//     })

//     test('it should pass backward SOUTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: -49,
//             direction: Direction.South,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.y).toEqual(-50)
//     })

//     test('it should pass backward next side NORTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 50,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.y).toEqual(-50)
//     })

//     test('it should pass backward NORTH', () => {
//         const map = new MarsMap(50, 50);
//         const basePosition: Point = {
//             x: 0,
//             y: 49,
//             direction: Direction.North,
//           }
//         const rover = new Rover(map, basePosition)
//         const positionBis = rover.backward()
//         expect(positionBis.y).toEqual(50)
//     })
// })