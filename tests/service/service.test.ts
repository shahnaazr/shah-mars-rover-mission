import { Rover } from "../../src/model/rover";
import { DIRECTIONS } from "../../src/model/directions";
import { Plateau } from "../../src/model/plateau";
import { actionMovementRules } from "../../src/service/service";

describe("test actionMovementRules function", () => {
  test("should return a final rover position after a call to actionMovementRules", () => {
    const maxCoordinatesForPlateau = { x: 5, y: 5 };
    const plateau = { coordinates: maxCoordinatesForPlateau };
    const coordinates = { x: 1, y: 2 };
    const position = { coordinates: coordinates, direction: DIRECTIONS[0] };
    const rover = new Rover(position);
    actionMovementRules("LMLMLMLMM", plateau, rover);
    expect(rover.position).toEqual({
      coordinates: { x: 1, y: 3 },
      direction: DIRECTIONS[0],
    });
  });
});
