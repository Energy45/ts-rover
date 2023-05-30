import { MarsMap } from "./classes/map.class";
import { Rover } from "./classes/rover.class";
import { Direction } from "./enums/direction.enum";
import { Point } from "./types/point.type";

describe('turnLeft function', () => {
    test('it should change direction to North', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.East,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnLeft()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.North)
    })

    test('it should change direction to West', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.North,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnLeft()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.West)
    })

    test('it should change direction to South', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.West,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnLeft()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.South)
    })
    test('it should change direction to East', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.South,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnLeft()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.East)
    })
})

describe('turnRight function', () => {
    test('it should change direction to North', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.West,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnRight()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.North)
    })

    test('it should change direction to West', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.South,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnRight()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.West)
    })

    test('it should change direction to South', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.East,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnRight()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.South)
    })
    test('it should change direction to East', () => {
        const map = new MarsMap(50, 50);
        const basePosition: Point = {
            x: 0,
            y: 0,
            direction: Direction.North,
          }
        const rover = new Rover(map, basePosition)
        const positionBis = rover.turnRight()
        console.log(positionBis.direction)
        expect(positionBis.direction).toEqual(Direction.East)
    })
})