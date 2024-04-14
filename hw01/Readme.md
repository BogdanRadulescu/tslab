# A (Very Simple) Game of Snake

We're going to build a very simple game of snake, as a console application.

## Setup

You will need to run `npm install` from the project root (the `tslab` folder), to install some node packages.

Afterwards, you should be able to run `tsx main.ts` from the `hw01` folder.

Key bindings are already implemented. If everything works, the application should stop when you press `q`.

> This was tested by running git bash in VS Code. Other terminals might not work properly.

## Task 0: Understanding the codebase

There are several files already in the skeleton. Take a moment to go through them and understand the purpose of each one:

* `Direction.ts` - this is an enum containing a list of directions. The snake can move in either of these directions, based on user input.
* `Position.ts` - this is a point in the game matrix. Y coordinates are rows (vertical), X coordinates are columns (horizontal)
* `GameBoard.ts` - this is the game matrix. The class contains methods that allow you to interact with the matrix
* `Snake.ts` - this is the logic for building and moving the snake. The snake is an array of `SnakeJoints`, where each joint has a Direction and a Position. The first SnakeJoint is the snake's head.
* `GameEngine.ts` - this contains the logic for running the game, the game state, user inputs.

> There are several TODOs in the code. You can search through all files by hitting `Ctrl + Shift + F`.

Search for all "TODO 0" comments and fill them out

## Task 1: Snake movement

Initially, the snake has 3 joints, all moving in the direction of the head.
We want the head to change its direction based on user inputs. Then, for each game tick, we want:
* All the joints to move one space in their direction
* All the joints to copy the direction of the previous joint. Let's say the head is moving DOWN this turn, and the previous joint was moving LEFT. In the next turn, we'll want the second joint to move DOWN, to follow the head.

Follow the "TODO 1" comments and implement the logic.

After this, your snake should be able to move correctly.

## Task 2: Game Over

This is fairly short, but implement the logic for detecting when the game is over. Look for the "TODO 2" comment.

## Task 3: Eating an Apple

An apple a day keeps the doctor away hehe.

When eating an apple, we want to:
* Add a joint at the end of the snake
* Generate a new position for the joint, in a random free space in the matrix
* Increase the game score

Follow "TODO 3" comments.

> That's it. Everything should now work, enjoy! :D
