var collection = require('./collection/index');
var math = require('./math/index');
var string = require('./string/index');
var other = require('./other/index');
var number = require('./number/index');
var _ = require('underscore');

var filters = {};

[
    'map',
    'reduce',
    'find',
    'filter',
    'reject',
    'every',
    'some',
    'contains',
    'pluck',
    'max',
    'min',
    'sortBy',
    'groupBy',
    'indexBy',
    'countBy',
    'shuffle',
    'sample',
    'toArray',
    'size',
    'first',
    'initial',
    'last',
    'rest',
    'flatten',
    'without',
    'union',
    'intersection',
    'difference',
    'uniq',
    'keys',
    'allKeys',
    'values',
    'pairs',
    'invert',
    'extend',
    'pick',
    'omit',
    'defaults',
    'has',
    'escape',
    'unescape',
    'result',
    'nl2br'
].forEach(function(key){
    filters[key] = _[key];
});


filters = _.extend(filters, collection, string, math, number, other);

module.exports = filters;
