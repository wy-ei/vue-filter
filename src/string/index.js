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


module.exports = {
    ...base,
    ...xcase,
    ...xpad,
    ...trimx,
    append,
    prepend,
    remove, // enhance
    test,
    truncate,
    repeat
};
