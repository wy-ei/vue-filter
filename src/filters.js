var collection = require('./collection/index');
var math = require('./math/index');
var string = require('./string/index');
var other = require('./other/index');
var number = require('./number/index');
var _ = require('underscore');


var filters = _.extend({}, _, collection, string, math, number, other);

module.exports = filters;
