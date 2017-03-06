var append = require('./append');
var prepend = require('./prepend');
var remove = require('./remove');
var base = require('./base');
var test = require('./test');
var trimx = require('./trimx');
var truncate = require('./truncate');
var pad = require('./pad');
var repeat = require('./repeat');
var xcase = require('./xcase');


module.exports = {
    ...base,
    ...xcase,
    ...pad,
    ...trimx,
    append,

    prepend,
    remove, // enhance
    test,
    truncate,
    repeat
};
