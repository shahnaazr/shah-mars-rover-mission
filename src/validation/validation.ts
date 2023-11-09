export const isValidMaxCoordinateForPateau = (input: string): boolean => {
  return !isNaN(Number(input)) && Number(input) > 0;
};

export const isValidCoordinateForInitialRoverLanding = (
  input: string,
  maxCoordinateForPlateau: string
): boolean => {
  return (
    !isNaN(Number(input)) &&
    Number(input) >= 0 &&
    Number(input) <= Number(maxCoordinateForPlateau)
  );
};

export const isValidDirectionForInitialRoverLanding = (
  input: string
): boolean => {
  input = input.toUpperCase();
  return input === "N" || input === "S" || input === "W" || input === "E";
};

export const isValidMovementRuleString = (input: string): boolean => {
  const allowedChars = ["L", "R", "M"];

  for (let char of input) {
    char = char.toUpperCase();
    if (!allowedChars.includes(char)) {
      return false; // If any character is not in the allowed set, it's invalid
    }
  }

  return true; // All characters are valid
};
