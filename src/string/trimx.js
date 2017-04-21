var util = require('../util');
var _ = require('underscore');
/**
 * Strips tabs, spaces, and newlines (all whitespace)
 * from the left or right or both side of a string.
 * which depends on second argument. if it is 'r' will only
 * trim right side,if it is 'l' will only trim left side
 * otherwise trim both left and right side.
 *
 * {{ '   some spaces   ' | trim }} => 'some spaces'
 * {{ '   some spaces   ' | trimRight }} => '   some spaces'
 * {{ '   some spaces   ' | trimLeft }} => 'some spaces   '
 */

function _trim(str, re) {
    if (_.isString(str)) {
        return str.replace(re, '');
    } else {
        util.type('trim', str, 'string');
        return str;
    }
}

function trim(str){
    return _trim(str, /^\s+|\s+$/g);
}

function trimLeft(str){
    return _trim(str, /^\s+/);
}

function trimRight(str){
    return _trim(str, /\s+$/);
}

module.exports = {
    trim: trim,
    trimLeft: trimLeft,
    trimRight: trimRight
};
