import { Direction, getReverse } from "./Direction";
import { Position } from "./Position";

class SnakeJoint {
    public direction: Direction;
    public position: Position;

    constructor(direction: Direction, position: Position) {
        this.direction = direction;
        this.position = position;
    }
}

export class Snake {
    private joints: Array<SnakeJoint>;

    public constructor(headPosition: Position, headDirection: Direction = Direction.RIGHT, numberOfJoints: number = 3) {
        this.joints = new Array<SnakeJoint>();

        // TODO 1: Initialize the snake joints.
        // The head, the first joint, should have `headPosition` and `headDirection`
        // The other joints should have the same direction as the first joint
        // The other joints should have coordinates based on the direction and the previous joint's position
        // Hint: you can use moveJoint and getReverse to calculate positions
    }

    public move(): Position {
        // TODO 1: Move the whole snake one position.
        // All joints' positions should transform to their next position
        // All joints' directions should transform to the previous joint's position
        
        return this.joints[0].position;
    }

    public eatApple(): void {
        // TODO 3: Add a joint at the end of the snake
    }

    private moveJoint(pos: Position, dir: Direction): Position {
        // TODO 1: Return a new position representing the next position of a joint,
        // based on its current position, and its direction
    }

    public setDirection = (newDirection: Direction): void => {
        // TODO 1: Set the direction of the snake's head.
        // This is called when a user inputs a movement
        // Should we allow all direction changes here? 
        // (no, we shouldn't. There's one illegal direction change for each current direction, can you see which one?)
    };
    public jointsPositions = () => this.joints.map(joint => joint.position);
}