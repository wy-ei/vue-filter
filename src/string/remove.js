import util from '../util/index';
/**
 * Removes all occurrences of a substring from a string.
 *
 * {{ 'Hello JavaScript' | remove 'Hello' }} => ' JavaScript'
 */

function remove(str, substr) {
    if (util.isString(str)) {
        str = str.split(substr).join('');
    }
    return str;
}

export default remove;
