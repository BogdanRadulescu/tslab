export class Position {
    public X: number;
    public Y: number;

    constructor(Y, X) {
        this.X = X;
        this.Y = Y;
    }

    public equals = (pos: Position): boolean => {
        // TODO 0: Check if the position received as parameter is equal
        // To the current instance, by checking if the coordinates are the same
    }
}