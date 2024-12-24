const DIRECTIONS = {
    'R': 'NESW',
    'L': 'WSEN'
};

const rotate = (command: 'R' | 'L', currentDirection: string) => {
    const directions = DIRECTIONS[command];
    return directions[(directions.indexOf(currentDirection) + 1) % 4];
}

export const execute = (commands: string) => {
    const direction = commands.split('').reduce((accumulator: string, command: string) => {
        if (command === 'L' || command === 'R') {
            accumulator = rotate(command, accumulator);
        }
        return accumulator;
    }, 'N');

    return `0:0:${direction}`;
};