var util = require('../util');
var _ = require('underscore');

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


['divide', 'minus', 'plus', 'multiply', 'mod', 'or', 'xor', 'and'].forEach(function(method) {
    operator[method] = function(a, b) {
        if (_.isNumber(a) && _.isNumber(b)) {
            switch(method){
                case 'divide':
                    return a / b;
                case 'minus':
                    return a - b;
                case 'plus':
                    return a + b;
                case 'multiply':
                    return a * b;
                case 'mod':
                    return a % b;
                case 'or':
                    return a | b;
                case 'xor':
                    return a ^ b;
                case 'and':
                    return a & b;
            }
        } else {
            console.warn('[filter:' + method + ']: but param should be number, but got ' + typeof a + ' ' + typeof b);
            return value;
        }
    };
});

 operator.not = function(a){
     return ~a;
 };

module.exports = operator;