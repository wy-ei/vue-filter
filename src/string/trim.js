import util from '../util/index';
/**
 * Strips tabs, spaces, and newlines (all whitespace)
 * from the left or right or both side of a string.
 * which depends on second argument. if it is 'r' will only
 * trim right side,if it is 'l' will only trim left side
 * otherwise trim both left and right side.
 *
 * {{ '   some spaces   ' | trim }} => 'some spaces'
 * {{ '   some spaces   ' | trim 'r' }} => '   some spaces'
 * {{ '   some spaces   ' | trim 'l' }} => 'some spaces   '
 */

function trim(str, rightOrleft) {
    if (util.isString(str)) {
        var re;
        if (rightOrleft == 'r') {
            re = /\s+$/;
        } else if (rightOrleft == 'l') {
            re = /^\s+/;
        } else {
            re = /^\s+|\s+$/g;
        }
        return str.replace(re, '');
    } else {
        return str;
    }
}

export default trim;
