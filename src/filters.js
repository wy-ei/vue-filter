var collection = require('./collection/index');
var math = require('./math/index');
var string = require('./string/index');
var other = require('./other/index');
var _ = require('underscore');

console.log(Object.keys(math));

var filters = _.extend({}, _, collection, string, math, other);

module.exports = filters;