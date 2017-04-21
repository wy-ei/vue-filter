var append = require('./append');
var prepend = require('./prepend');
var remove = require('./remove');
var base = require('./base');
var test = require('./test');
var trimx = require('./trimx');
var truncate = require('./truncate');
var xpad = require('./xpad');
var repeat = require('./repeat');
var xcase = require('./xcase');
var _ = require('underscore');

module.exports = _.extend({
    append: append,
    prepend: prepend,
    remove: remove, // enhance
    test: test,
    truncate: truncate,
    repeat: repeat
}, base, xcase, xpad, trimx);
