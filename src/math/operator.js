/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

/**
 *
 * @filter divide, minus, plus, multiply, mod, or, xor, and, not
 * @description some math operator.
 * @example
 * ```
 * {{ 10 | plus(1) }} => 11
 * {{ 2 | or(1) }} => 3
 * {{ 255 | not() }} => -256
 * ```
 */
var operator = {};


['divide', 'minus', 'plus', 'multiply', 'mod'].forEach(function(method) {
    operator[method] = function(a, b) {
        a = Number(a);
        b = Number(b);

        switch(method){
        case 'divide':
            if(b === 0){
                console.error('0 can\'t as a divisor');
            }
            return a / b;
        case 'minus':
            return a - b;
        case 'plus':
            return a + b;
        case 'multiply':
            return a * b;
        case 'mod':
            return a % b;
        // case 'or':
        //     return a | b;
        // case 'xor':
        //     return a ^ b;
        // case 'and':
        //     return a & b;
        }
    };
});

module.exports = operator;
