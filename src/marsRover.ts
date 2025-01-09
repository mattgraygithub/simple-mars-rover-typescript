const DIRECTIONS = ['N', 'E', 'S', 'W'];
const POSITIONS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rotateLeft = (position: string) => {
    const direction = position.split(":")[2];
    const y = position.split(":")[1];
    const x = position.split(":")[0];
    const newDirection = DIRECTIONS.slice().reverse()[(DIRECTIONS.slice().reverse().indexOf(direction) + 1) % 4];
    return `${x}:${y}:${newDirection}`;
};

const rotateRight = (position: string) => {
    const direction = position.split(":")[2];
    const y = position.split(":")[1];
    const x = position.split(":")[0];
    const newDirection = DIRECTIONS[(DIRECTIONS.indexOf(direction) + 1) % 4];
    return `${x}:${y}:${newDirection}`;
};

const move = (position: string) => {
    const direction = position.split(":")[2];
    const y = position.split(":")[1];
    const x = position.split(":")[0];
    const nextY = POSITIONS[(POSITIONS.indexOf(y.toString()) + 1) % 10];
    const previousY = POSITIONS.slice().reverse()[(POSITIONS.slice().reverse().indexOf(y) + 1) % 10];
    const nextX = POSITIONS[(POSITIONS.indexOf(x.toString()) + 1) % 10];
    const previousX = POSITIONS.slice().reverse()[(POSITIONS.slice().reverse().indexOf(x) + 1) % 10];
    if (direction === 'N') {
        return `${x}:${nextY}:${direction}`;
    } else if (direction === 'S') {
        return `${x}:${previousY}:${direction}`;
    } else if (direction === 'E') {
        return `${nextX}:${y}:${direction}`;
    } else {
        return `${previousX}:${y}:${direction}`;
    }
};

export const execute = (commands: string) => {
    return commands.split('').reduce((position: string, command: string) => {
        switch (command) {
            case 'L':
                return rotateLeft(position);
            case 'R':
                return rotateRight(position);
            case 'M':
                return move(position);
        }
        return position;
    }, '0:0:N');
};
