/**
 * 
 * @description all the method in Math without random
 * @example
 * ```
 * {{ -1.2 | abs }}  => 1.2
 * {{ 1 | acos }}  => 0
 * {{ 1.3 | ceil }} => 2
 * {{ 3 | pow(2) }} => 9  i.e: Math.pow(3,2)
 * ```
 */

var base = {};

['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor',
    'log', 'pow', 'round', 'sin', 'sqrt', 'tan'
].forEach(function(method) {
    base[method] = function(value, n) {
        if (typeof value === 'number') {
            return Math[method](value, n);
        } else {
            return value;
        }
    };
});


module.exports = base;
