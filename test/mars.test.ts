import {describe, expect, test} from 'vitest'
import MarsRover from '../src/MarsRover';
import MarsPlateau from '../src/MarsPlateau';

describe('Mars Rover', () => {
    const plateau = new MarsPlateau(5, 5);

    test('execute rover instructions for final co-ordinates and heading', () => {
        const rover = new MarsRover({x: 1, y: 2, direction: 'N'}, plateau);
        rover.executeInstructions('LMLMLMLMM');

        const output = rover.getPosition();

        expect(output).toBe('1 3 N');
    });

    test('execute rover instructions for final co-ordinates and heading', () => {
        const rover = new MarsRover({x: 3, y: 3, direction: 'E'}, plateau);
        rover.executeInstructions('MMRMMRMRRM');

        const output = rover.getPosition();

        expect(output).toBe('5 1 E');
    });
});
