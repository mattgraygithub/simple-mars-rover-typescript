import {execute} from "../src/marsRover";

describe('Mars Rover', () => {
    it.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N'],
        ['RRRRR', '0:0:E'],
        ['RRRRRRRR', '0:0:N']
    ])('rotates right %s', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    });

    it.each([
        ['L', '0:0:W'],
        ['LL', '0:0:S'],
        ['LLL', '0:0:E'],
        ['LLLL', '0:0:N'],
        ['LLLLL', '0:0:W'],
        ['LLLLLLLL', '0:0:N']
    ])('rotates left %s', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    });

    it.each([
        ['LRRL', '0:0:N'],
        ['RLRLL', '0:0:W'],
        ['LRRLRLRR', '0:0:S']
    ])('rotates left and right %s', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    });

    it.each([
        ['M', '0:1:N'],
        ['MM', '0:2:N'],
        ['MMM', '0:3:N'],
        ['MMMMMMMMMM', '0:0:N']
    ])('Moves north', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    })

    it.each([
        ['RM', '1:0:E'],
        ['RMM', '2:0:E'],
        ['RMMM', '3:0:E'],
        ['RMMMMMMMMMM', '0:0:E']
    ])('Moves east', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    })

    it.each([
        ['RRM', '0:9:S'],
        ['RRMM', '0:8:S'],
        ['RRMMM', '0:7:S'],
        ['RRMMMMMMMMMMM', '0:9:S']
    ])('Moves south', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    })

    it.each([
        ['RRRM', '9:0:W'],
        ['RRRMM', '8:0:W'],
        ['RRRMMM', '7:0:W'],
        ['RRRMMMMMMMMMMM', '9:0:W']
    ])('Moves west', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    })

    it.each([
        ['MR', '0:1:E'],
        ['MRM', '1:1:E'],
        ['MRL', '0:1:N'],
        ['RMR', '1:0:S'],
        ['RML', '1:0:N'],
        ['RMLM', '1:1:N'],
        ['RMRM', '1:9:S'],
        ['MLM', '9:1:W']
    ])('Moves with multiple different commands', (commands, expected) => {
        expect(execute(commands)).toBe(expected);
    })
});
