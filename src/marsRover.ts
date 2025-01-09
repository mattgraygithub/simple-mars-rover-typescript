const DIRECTIONS = {
    'R': 'NESW',
    'L': 'WSEN'
};

const POSITIONS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rotate = (command: 'R' | 'L', position: string) => {
    const directions = DIRECTIONS[command];
    const currentDirection = position.split(":")[2];
    const newDirectionIndex = (directions.indexOf(currentDirection) + 1) % directions.length;
    const newDirection = directions.charAt(newDirectionIndex);
    return `0:0:${newDirection}`;
};

const move = (position: string) => {
    const direction = position.split(":")[2];
    const y = Number(position.split(":")[1]);
    const x = Number(position.split(":")[0]);
    const nextY = POSITIONS[(POSITIONS.indexOf(y.toString()) + 1) % 10];
    const previousY = POSITIONS.slice().reverse()[(POSITIONS.slice().reverse().indexOf(y.toString()) + 1) % 10];
    const nextX = POSITIONS[(POSITIONS.indexOf(x.toString()) + 1) % 10];
    const previousX = POSITIONS.slice().reverse()[(POSITIONS.slice().reverse().indexOf(x.toString()) + 1) % 10];
    if (direction === 'N') {
        return `0:${nextY}:${direction}`;
    } else if (direction === 'S') {
        return `0:${previousY}:${direction}`;
    } else if (direction === 'E') {
        return `${nextX}:0:${direction}`;
    } else {
        return `${previousX}:0:${direction}`;
    }
};

export const execute = (commands: string) => {
    return commands.split('').reduce((position: string, command: string) => {
        if (command === 'L' || command === 'R') {
            position = rotate(command, position);
        }
        if (command === 'M') {
            position = move(position)
        }
        return position;
    }, '0:0:N');
};