type POSITION_ARGS = {
    x: string;
    y: string;
    direction: string
}

const DIRECTIONS = ['N', 'E', 'S', 'W'];
const POSITION = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const next = (item: string, array: string[]) => {
    return array[(array.indexOf(item) + 1) % array.length];
};

const previous = (item: string, array: string[]) => {
    const arrayReversed = array.slice().reverse();
    return arrayReversed[(arrayReversed.indexOf(item) + 1) % array.length];
};

const rotateLeft = ({x, y, direction}: POSITION_ARGS) => {
    return `${x}:${y}:${previous(direction, DIRECTIONS)}`;
};

const rotateRight = ({x, y, direction}: POSITION_ARGS) => {
    return `${x}:${y}:${next(direction, DIRECTIONS)}`;
};

const move = ({x, y, direction}: POSITION_ARGS) => {
    switch (direction) {
        case 'N':
            return `${x}:${next(y, POSITION)}:${direction}`;
        case 'S':
            return `${x}:${previous(y, POSITION)}:${direction}`;
        case 'E':
            return `${next(x, POSITION)}:${y}:${direction}`;
        case 'W':
            return `${previous(x, POSITION)}:${y}:${direction}`;
        default:
            return `${x}:${y}:${direction}`;
    }
};

export const execute = (commands: string) => {
    return commands.split('').reduce((position: string, command: string) => {
        const positionArgs = {
            x: position.split(":")[0],
            y: position.split(":")[1],
            direction: position.split(":")[2]
        }
        switch (command) {
            case 'L':
                return rotateLeft(positionArgs);
            case 'R':
                return rotateRight(positionArgs);
            case 'M':
                return move(positionArgs);
        }
        return position;
    }, '0:0:N');
};
