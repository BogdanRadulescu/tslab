import { Position } from "./Position";
import { Snake } from "./Snake";

export class GameBoard {
    public worldMatrix: Array<Array<number>>;

    public constructor(height: number, width: number) {
        this.worldMatrix = new Array<Array<number>>(height);
        for (let i = 0; i < height; i++) {
            this.worldMatrix[i] = new Array<number>(width);
            for (let j = 0; j < width; j++) {
                this.worldMatrix[i][j] = 0;
            }
        }
    }

    private clearWorld() {
        for (let i = 0; i < this.worldMatrix.length; i++) {
            for (let j = 0; j < this.worldMatrix[0].length; j++) {
                this.worldMatrix[i][j] = 0;
            }
        }
    }

    private getStringRepresentation() {
        let gameBoardRepresentation = '';
        for (let i = 0; i < this.worldMatrix[0].length + 1; i++) {
            gameBoardRepresentation += '▬';
        }
        gameBoardRepresentation += '\n'

        for (let i = 0; i < this.worldMatrix.length; i++) {
            gameBoardRepresentation += '▌';
            for (let j = 0; j < this.worldMatrix[0].length; j++) {
                gameBoardRepresentation += this.worldMatrix[i][j] === 0 ? ' ' : '■';
            }
            gameBoardRepresentation += '▌'
            gameBoardRepresentation += '\n'
        }
        for (let i = 0; i < this.worldMatrix[0].length + 1; i++) {
            gameBoardRepresentation += '▬';
        }
        gameBoardRepresentation += '\n';
        return gameBoardRepresentation;
    }

    public getRender(snake: Snake, applePosition: Position): string {
        this.clearWorld();

        snake.jointsPositions().forEach(joint => this.worldMatrix[joint.Y][joint.X] = 1);

        this.worldMatrix[applePosition.Y][applePosition.X] = 1;

        return this.getStringRepresentation();
    }
}