import { Coordinates } from "../model/coordinates";
import { Direction } from "../model/directions";
import { Plateau } from "../model/plateau";
import { Position } from "../model/position";
import { Rover } from "../model/rover";
import { PlateauService } from "./plateau_service";

export class RoverService {
  [x: string]: any;
  rover: Rover;

  constructor(
    roverXCoordinate: number,
    roverYCoordinate: number,
    roverDirection: Direction
  ) {
    const roverCoordinates = { x: roverXCoordinate, y: roverYCoordinate };
    const roverPosition = {
      coordinates: roverCoordinates,
      direction: roverDirection,
    };
    this.rover = new Rover(roverPosition);
  }

  getMarsRover(): Rover {
    return this.rover;
  }

  getMarsRoverPosition(): Position {
    return this.rover.position;
  }

  actionMovementRules(
    movement: string,
    plateauService: PlateauService,
    obstacles: Array<Coordinates>
  ) {}
}
