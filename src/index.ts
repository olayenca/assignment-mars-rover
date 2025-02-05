import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {exec} from 'node:child_process';
import * as querystring from "node:querystring";

import MarsPlateau from "./MarsPlateau";
import MarsRover from "./MarsRover";
import {Cardinals} from "./types";

const readInput = readline.createInterface({input, output});

(async () => {
    const current = await readInput.question('Enter Mars Rover current position: ');
    console.log(`User entered: ${current}`);

    const route = await readInput.question('Enter Mars Rovers route instruction: ');
    console.log(`User entered: ${route}`);

    const plateau = new MarsPlateau(5, 5);
    const rover = new MarsRover({
        x: parseInt(current[0]),
        y: parseInt(current[2]),
        direction: current[4] as Cardinals
    }, plateau);
    rover.executeInstructions(route);

    const output = rover.getPosition();

    const url = `http://localhost:3000/rover?${querystring.stringify({
        plateau: '55',
        route: route.toString(),
        position: output.split(" ").join("").toString()
    })}`;

    exec((`${process.platform
        .replace('darwin', '')
        .replace(/win32|linux/, 'xdg-')}open "${url}"`));

    console.log(`Rover final position: ${output}. See output in the browser at ${url}`);

    readInput.close();
})();



