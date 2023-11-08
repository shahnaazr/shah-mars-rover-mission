import { Instruction } from "./instructions";
import { Position } from "./position";
import { Movable } from "./movable";
import { Vehicle } from "./vehicle";
import { DIRECTIONS } from "./directions";

export class Rover extends Vehicle implements Movable {
  position: Position;

  constructor(position: Position) {
    super();
    this.position = position;
  }

  turnLeft(): void {
    switch (this.position.direction) {
      case "N":
        this.position.direction = "E";
        break;
      case "S":
        this.position.direction = "W";
        break;
      case "E":
        this.position.direction = "S";
        break;
      case "W":
        this.position.direction = "N";
        break;
      default:
        throw new Error(
          "The direction does not match any of the accepted value"
        );
    }
  }

  turnRight(): void {
    switch (this.position.direction) {
      case "N":
        this.position.direction = "W";
        break;
      case "S":
        this.position.direction = "E";
        break;
      case "E":
        this.position.direction = "N";
        break;
      case "W":
        this.position.direction = "S";
        break;
      default:
        throw new Error(
          "The direction does not match any of the accepted value"
        );
    }
  }

  move(): void {
    switch (this.position.direction) {
      case "N":
        this.position.coordinates.y = this.position.coordinates.y + 1;
        break;
      case "S":
        this.position.coordinates.y = this.position.coordinates.y - 1;
        break;
      case "E":
        this.position.coordinates.x = this.position.coordinates.x + 1;
        break;
      case "W":
        this.position.coordinates.x = this.position.coordinates.x - 1;
        break;
      default:
        throw new Error(
          "The direction does not match any of the accepted value"
        );
    }
  }
}
