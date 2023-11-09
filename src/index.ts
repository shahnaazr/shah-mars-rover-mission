import { Direction } from "./model/directions";
import { Rover } from "./model/rover";
import { actionMovementRules } from "./service/service";
import {
  getUserInput,
  rl,
  displayUserInput,
  exitApp,
} from "./user_interface/user_input";
import {
  isValidMovementRuleString,
  isValidMaxCoordinateForPateau,
  isValidCoordinateForInitialRoverLanding,
  isValidDirectionForInitialRoverLanding,
} from "./validation/validation";

const main = async () => {
  try {
    const maxXCoordinateForPlateau = await getUserInput(
      "Please enter the max x coordinate for the plateau. It should be a positve integer greater than zero. ",
      (input) => isValidMaxCoordinateForPateau(input)
    );
    const maxYCoordinateForPlateau = await getUserInput(
      "Please enter the max y coordinate for the plateau. It should be a positve integer greater than zero.  ",
      (input) => isValidMaxCoordinateForPateau(input)
    );
    const initialXCoordinateForRover = await getUserInput(
      "Please enter the x coordinate for the rover. It should be an positive integer including zero, however not greater than max X coordinate for the plateau.  ",
      (input) =>
        isValidCoordinateForInitialRoverLanding(input, maxXCoordinateForPlateau)
    );
    const initialYCoordinateForRover = await getUserInput(
      "Please enter the y coordinate for the rover. It should be an positive integer including zero, however not greater than max Y coordinate for the plateau. ",
      (input) =>
        isValidCoordinateForInitialRoverLanding(input, maxYCoordinateForPlateau)
    );
    const initialDirectionForRover = await getUserInput(
      "Please enter the direction for the rover. Valid values are N, S, W or E only: ",
      (input) => isValidDirectionForInitialRoverLanding(input)
    );

    const movementRulesForRover = await getUserInput(
      "Please enter the movement rules for the rover. eg LMMLRMMMM ",
      (input) => isValidMovementRuleString(input)
    );
    displayUserInput(
      Number(maxXCoordinateForPlateau),
      Number(maxYCoordinateForPlateau),
      Number(initialXCoordinateForRover),
      Number(initialYCoordinateForRover),
      initialDirectionForRover,
      movementRulesForRover
    );

    const plateauCoordinates = {
      x: Number(maxXCoordinateForPlateau),
      y: Number(maxYCoordinateForPlateau),
    };
    const plateau = { coordinates: plateauCoordinates };
    const coordinatesForRover = {
      x: Number(initialXCoordinateForRover),
      y: Number(initialYCoordinateForRover),
    };
    const positionForRoverToLandInThePlateau = {
      coordinates: coordinatesForRover,
      direction: initialDirectionForRover as Direction,
    };
    const rover = new Rover(positionForRoverToLandInThePlateau);
    actionMovementRules(movementRulesForRover, plateau, rover);
    rover.displayRoverPosition();
  } finally {
    rl.close();
  }
};

main().then(() => {
  exitApp();
});
