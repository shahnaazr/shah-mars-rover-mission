import { INSTRUCTIONS } from "../model/instructions";
import { Plateau } from "../model/plateau";
import { Rover } from "../model/rover";

export const actionMovementRules = (
  movementRulesForRover: string,
  plateau: Plateau,
  rover: Rover
): void => {
  for (let char of movementRulesForRover) {
    char = char.toUpperCase();
    if (char === INSTRUCTIONS[0]) {
      rover.turnLeft();
    } else if (char === INSTRUCTIONS[1]) {
      rover.turnRight();
    } else if (char === INSTRUCTIONS[2]) {
      rover.move();
    }
  }
};
