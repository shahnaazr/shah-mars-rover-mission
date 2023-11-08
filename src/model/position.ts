import { Direction } from "./directions";
import { Coordinates } from "./coordinates";

export type Position = {
  coordinates: Coordinates;
  direction: Direction;
};
