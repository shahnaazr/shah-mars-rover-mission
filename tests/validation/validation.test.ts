import {
  isValidMaxCoordinateForPateau,
  isValidCoordinateForInitialRoverLanding,
  isValidDirectionForInitialRoverLanding,
  isValidMovementRuleString,
} from "../../src/validation/validation";
describe("test isValidMaxCoordinateForPateau function", () => {
  test("should return false for negative integer as input in isValidMaxCoordinateForPateau", () => {
    expect(isValidMaxCoordinateForPateau("-2")).toEqual(false);
  });

  test("should return false for zero as input in isValidMaxCoordinateForPateau", () => {
    expect(isValidMaxCoordinateForPateau("0")).toEqual(false);
  });

  test("should return false for non number value as input in isValidMaxCoordinateForPateau", () => {
    expect(isValidMaxCoordinateForPateau("abc-sdd")).toEqual(false);
  });

  test("should return true for a positive integer as input in isValidMaxCoordinateForPateau", () => {
    expect(isValidMaxCoordinateForPateau("5")).toEqual(true);
  });
});

describe("test isValidCoordinateForInitialRoverLanding function", () => {
  test("should return false for negative integer as input in isValidCoordinateForInitialRoverLanding", () => {
    expect(isValidCoordinateForInitialRoverLanding("-2", "5")).toEqual(false);
  });

  test("should return true for zero as input in isValidCoordinateForInitialRoverLanding", () => {
    expect(isValidCoordinateForInitialRoverLanding("0", "5")).toEqual(true);
  });

  test("should return false for non number value as input in isValidCoordinateForInitialRoverLanding", () => {
    expect(isValidCoordinateForInitialRoverLanding("abc-sdd", "5")).toEqual(
      false
    );
  });

  test("should return true for a positive integer as input and which is lesser than max plateau coordinate in isValidCoordinateForInitialRoverLanding", () => {
    expect(isValidCoordinateForInitialRoverLanding("3", "5")).toEqual(true);
  });

  test("should return true for a positive integer as input and which is same as max plateau coordinate in isValidCoordinateForInitialRoverLanding", () => {
    expect(isValidCoordinateForInitialRoverLanding("5", "5")).toEqual(true);
  });
});

describe("test isValidDirectionForInitialRoverLanding function", () => {
  test("should return false for invalid direction value as input in isValidDirectionForInitialRoverLanding", () => {
    expect(isValidDirectionForInitialRoverLanding("d")).toEqual(false);
  });

  test("should return false for invalid direction value as input in isValidDirectionForInitialRoverLanding", () => {
    expect(isValidDirectionForInitialRoverLanding("12")).toEqual(false);
  });

  test("should return true for valid direction value as input in lowercase in isValidDirectionForInitialRoverLanding", () => {
    expect(isValidDirectionForInitialRoverLanding("s")).toEqual(true);
  });

  test("should return false for valid direction value as input in uppercase in isValidDirectionForInitialRoverLanding", () => {
    expect(isValidDirectionForInitialRoverLanding("S")).toEqual(true);
  });
});

describe("test isValidMovementRuleString function", () => {
  test("should return false for invalid direction value as input in isValidMovementRuleString", () => {
    expect(isValidMovementRuleString("dmr")).toEqual(false);
  });

  test("should return false for invalid direction value as input in isValidMovementRuleString", () => {
    expect(isValidMovementRuleString("12")).toEqual(false);
  });

  test("should return true for valid direction value as input in lowercase in isValidMovementRuleString", () => {
    expect(isValidMovementRuleString("lllmmmrrr")).toEqual(true);
  });

  test("should return false for valid direction value as input in uppercase in isValidMovementRuleString", () => {
    expect(isValidMovementRuleString("RRRLLMMRRMMM")).toEqual(true);
  });
});
