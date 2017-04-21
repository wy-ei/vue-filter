var _ = require('underscore');
var util = require('../util');

var base = {};

['toFixed', 'toPrecision'].forEach(function(method) {
    base[method] = function(num) {
        var type = typeof num;
        if (type === 'number') {
            return Number.prototype[method].apply(num, _.rest(arguments));
        } else {
            util.type(num, 'number');
            return num;
        }
    };
});

module.exports = base;
