# shah-mars-rover-mission

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the plateau.
The application translates the commands sent from earth to instructions that are understood by the rover.
The user inputs the instructions to move the rover within the plateau.

## Approach:

- The application takes user input via the console.
- User provides the size eg. (x, y) of the plateau.
- User provides the initial starting point (x,y) of a rover and the direction (N,S,E,W) the rover is facing.
- User also provides the movement rules (L,R, M) which the application will use to move the rover around the plateau.
- The application will display the final rover position.

## Assumption:

The plateau is rectangular.

## Pre-requisite:

npm and git installed.

## How to run the application.

1. git clone the project
2. Run the command, `npm install` to install all the neccessary dependencies
3. Run the command, `npm start`

### user input steps:

- Please enter the max x coordinate for the plateau. It should be a positve integer greater than zero.
- 5
- Please enter the max y coordinate for the plateau. It should be a positve integer greater than zero.
- 5
- Please enter the x coordinate for the rover. It should be an positive integer including zero, however not greater than max X coordinate for the plateau.
- 1
- Please enter the y coordinate for the rover. It should be an positive integer including zero, however not greater than max Y coordinate for the plateau.
- 2
- Please enter the direction for the rover. Valid values are N, S, W or E only:
- N
- Please enter the movement rules for the rover. eg LMMLRMMMM
- LMLMLMLMM

### Output

The application will output the Result:
eg. 1 3 N

## Future thoughts

1. Application to handle multiple rovers on the plateau.
2. Application to inform about any obstacles encountured while moving the rover.
