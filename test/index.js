require('babel-register');
require('./util');
require('./collection');
require('./string');
require('./math');
require('./other');

var filters = require('../src/filters');
var test = require('tape');

var list = [
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
    'result'
];

test('filters', function(t){
    list.forEach(key=>{
        t.true(filters[key]);
    });
    t.end();
});
