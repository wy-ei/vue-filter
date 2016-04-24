import util from '../util/index';

/**
 * Divides an output by a number
 *
 * {{ 10 | divide 4 }} => 2.5
 */

function divide(value, n) {
    if (util.isNumber(value)) {
        return value / n;
    } else {
        return value;
    }
}


/**
 * Subtracts a number from an output.
 *
 * {{ 12 | minus 2 }} => 10
 */

function minus(value, n) {
    if (util.isNumber(value)) {
        return value - n;
    } else {
        return value;
    }
}

/**
 * Adds a number to an output.
 *
 * {{ 10 | plus 2 }} => 12
 */

function plus(value, n) {
    if (util.isNumber(value)) {
        return value + n;
    } else {
        return value;
    }
}

/**
 * Multiplies an output by a number.
 *
 * {{ 10 | multiply 2 }} => 20
 */

function multiply(value, n) {
    if (util.isNumber(value)) {
        return value * n;
    } else {
        return value;
    }
}

/**
 * Divides an output by a number and returns the remainder.
 *
 * {{ 10 | mod 2 }} => 20
 */

function mod(value, n) {
    if (util.isNumber(value)) {
        return value % n;
    } else {
        return value;
    }
}

export {
    plus,
    minus,
    multiply,
    divide,
    mod
};
