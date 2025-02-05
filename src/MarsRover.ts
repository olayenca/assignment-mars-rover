import MarsPlateau from "./MarsPlateau";
import {Cardinals, Position} from "./types";

export default class MarsRover {
    position: Position;
    plateau: MarsPlateau;

    constructor(position: Position, plateau: MarsPlateau) {
        this.position = position;
        this.plateau = plateau;
    }

    executeInstructions(instructions: string): void {
        for (const instruction of instructions) {
            if (instruction === 'L' || instruction === 'R') {
                this.rotate(instruction);
            } else if (instruction === 'M') {
                this.move();
            }
        }
    }

    rotate(direction: 'L' | 'R'): void {
        const directions: Cardinals[] = ['N', 'E', 'S', 'W'];
        let index = directions.indexOf(this.position.direction);
        if (direction === 'L') {
            index = (index + 3) % 4;
        } else {
            index = (index + 1) % 4;
        }
        this.position.direction = directions[index];
    }

    move(): void {
        let {x, y} = this.position;
        switch (this.position.direction) {
            case 'N':
                y += 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'S':
                y -= 1;
                break;
            case 'W':
                x -= 1;
                break;
        }
        if (this.plateau.isWithinBounds(x, y)) {
            this.position.x = x;
            this.position.y = y;
        }
    }

    getPosition(): string {
        return `${this.position.x} ${this.position.y} ${this.position.direction}`;
    }
}
