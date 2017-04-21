var base = require('./base');
var operator = require('./operator');

var sum = require('./sum');
var mean = require('./mean');

var _ = require('underscore');

module.exports = _.extend({
    sum: sum,
    mean: mean
}, operator, base);