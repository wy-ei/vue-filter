var base = require('./base');
var operator = require('./operator');

var sum = require('./sum');
var mean = require('./mean');


module.exports = {
    ...operator,
    ...base,
    sum,
    mean
};