import { Rover } from "../../src/model/rover";
import { DIRECTIONS } from "../../src/model/directions";

describe("test rover move() function", () => {
  test("should return 3 for y coordinate when rover is facing north and calls the move method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[0] };
    const rover = new Rover(position);
    rover.move();
    expect(rover.position.coordinates).toEqual({ x: 3, y: 3 });
  });

  test("should return 1 for y coordinate when rover is facing north and calls the move method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[1] };
    const rover = new Rover(position);
    rover.move();
    expect(rover.position.coordinates).toEqual({ x: 3, y: 1 });
  });

  test("should return 2 for x coordinate when rover is facing north and calls the move method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[2] };
    const rover = new Rover(position);
    rover.move();
    expect(rover.position.coordinates).toEqual({ x: 2, y: 2 });
  });

  test("should return 4 for x coordinate when rover is facing north and calls the move method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[3] };
    const rover = new Rover(position);
    rover.move();
    expect(rover.position.coordinates).toEqual({ x: 4, y: 2 });
  });
});

describe("test rover turnLeft() function", () => {
  test("should return direction, West when rover is facing north and calls the turnLeft() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[0] };
    const rover = new Rover(position);
    rover.turnLeft();
    expect(rover.position.direction).toEqual("W");
  });

  test("should return direction, East when rover is facing south and calls the turnLeft() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[1] };
    const rover = new Rover(position);
    rover.turnLeft();
    expect(rover.position.direction).toEqual("E");
  });

  test("should return direction, South when rover is facing west and calls the turnLeft() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[2] };
    const rover = new Rover(position);
    rover.turnLeft();
    expect(rover.position.direction).toEqual("S");
  });

  test("should return direction, North when rover is facing east and calls the turnLeft() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[3] };
    const rover = new Rover(position);
    rover.turnLeft();
    expect(rover.position.direction).toEqual("N");
  });
});

describe("test rover turnRight() function", () => {
  test("should return direction, East when rover is facing north and calls the turnRight() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[0] };
    const rover = new Rover(position);
    rover.turnRight();
    expect(rover.position.direction).toEqual("E");
  });

  test("should return direction, West when rover is facing south and calls the turnRight() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[1] };
    const rover = new Rover(position);
    rover.turnRight();
    expect(rover.position.direction).toEqual("W");
  });

  test("should return direction, North when rover is facing west and calls the turnRight() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[2] };
    const rover = new Rover(position);
    rover.turnRight();
    expect(rover.position.direction).toEqual("N");
  });

  test("should return direction, South when rover is facing east and calls the turnRight() method", () => {
    const coordinates = { x: 3, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[3] };
    const rover = new Rover(position);
    rover.turnRight();
    expect(rover.position.direction).toEqual("S");
  });
});
