import {execute} from "../src/marsRover";

describe('Mars Rover', () => {
    it.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N'],
        ['RRRRR', '0:0:E'],
        ['RRRRRRRR', '0:0:N'],
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
})