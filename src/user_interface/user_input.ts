import * as readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const getUserInput = (
  question: string,
  validator: (input: string) => boolean
): Promise<string> => {
  return new Promise((resolve) => {
    function ask() {
      rl.question(question, (answer) => {
        if (validator(answer)) {
          resolve(answer);
        } else {
          console.log("Invalid input. Please try again.");
          ask();
        }
      });
    }
    ask();
  });
};

export const displayUserInput = (
  maxXCoordinateForPlateau: number,
  maxYCoordinateForPlateau: number,
  initialXCoordinateForRover: number,
  initialYCoordinateForRover: number,
  initialDirectionForRover: string,
  movementRulesForRover: string
): void => {
  console.log(
    `==========================================================================`
  );
  console.log(
    `The max x and y coordinates of the plateau are ${maxXCoordinateForPlateau} ${maxYCoordinateForPlateau}`
  );
  console.log(
    `==========================================================================`
  );
  console.log(
    `The rover will be dropped at position : ${initialXCoordinateForRover} ${initialYCoordinateForRover} ${initialDirectionForRover}`
  );

  console.log(
    `==========================================================================`
  );
  console.log(`The movement rules provided is : ${movementRulesForRover}`);
  console.log(
    `==========================================================================`
  );
};

export const exitApp = () => {
  console.log(
    `==========================================================================`
  );
  console.log("\nHave a great day! Bye!!!");
  process.exit(0);
};
