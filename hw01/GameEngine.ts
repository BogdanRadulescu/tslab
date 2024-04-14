import { Direction } from "./Direction";
import { GameBoard } from "./GameBoard";
import { Position } from "./Position";
import { Snake } from "./Snake";

export class GameEngine {
    private static HEIGHT = 20;
    private static WIDTH = 50;
    private static SLEEP_DELAY_MS = 150;
    private gameOver = false;
    private gameScore = 0;

    private changedDirectionThisTick: boolean = false;

    private board: GameBoard;
    private snake: Snake;
    private applePosition: Position;

    constructor() {
        this.board = new GameBoard(GameEngine.HEIGHT, GameEngine.WIDTH);
        this.snake = new Snake(new Position(Math.floor(GameEngine.HEIGHT / 4), Math.floor(GameEngine.WIDTH / 4)));
        this.applePosition = new Position(Math.floor(GameEngine.HEIGHT / 2), Math.floor(GameEngine.WIDTH / 2));
    }

    async runGame() {
        while(!this.gameOver) {
            await this.runOneTurn();
        }
        console.log('Game Over!');
        process.exit();
    }

    private isGameOver(): boolean {
        // TODO 2: The game can finish when the snake's head hits a wall
        // Or when the snake's head hits a joint

        return false;
    }

    private async runOneTurn() {
        this.changedDirectionThisTick = false;

        // Move the snake
        this.snake.move();

        // Eat the apple
        this.eatAppleIfSnakeReachedIt();

        // Display the board and score
        console.log(`Score: ${this.gameScore}`);
        console.log(this.board.getRender(this.snake, this.applePosition));

        // Check if the game is over
        if (this.isGameOver()) {
            this.gameOver = true;
            return;
        }

        // Wait one tick
        await this.wait();

        // Clear the board
        console.clear();
    }

    private eatAppleIfSnakeReachedIt(): void {
        // TODO 3: we want to:
        // Get a list of all snake joint positions
        // If the head didn't touch the apple, then return nothing
        // Otherwise, call this.snake.eatApple()
        // Then, compute a list of all free positions. Free positions are those not occupied by a snake joint
        // Hint: You can use GameEngine.WIDTH and GameEngine.HEIGHT
        // If there are no free positions, then the game is over, player won. Set this.gameOver to true and return from the function
        // Otherwise, pick a random position from this list. Set this.applePosition to that position
        // Increment this.gameScore by 1
    }

    private wait() {
        return new Promise( resolve => setTimeout(resolve, GameEngine.SLEEP_DELAY_MS));
    }

    public registerUserInputs(): void {
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
        }

        process.stdin.on('keypress', async (character, key) => {
            // We don't want the user to change directions multiple times per tick
            // Because they could move back into the snake's body if the snake hasn't moved, but the direction has changed.
            // So we only register the first key press per tick

            if (this.changedDirectionThisTick) {
                return;
            }
            switch (key.name) {
                // TODO 1: Set the snake head's direction based on user input
                // You can change the key bindings if you want
                case 'w':
                    break;
                case 'a':
                    break;
                case 's':
                    break;
                case 'd':
                    break;
                case 'q':
                    process.exit();
                default:
                    return;
              }
            this.changedDirectionThisTick = true;
        });
    }
}
    