/**
 * truncate text to a specified length.
 *
 * {{ 'this is a big city!' | truncate 11 '...' true }} => this is...
 */

function truncate(str, length, ellipses, preserveWords) {
    length = length || 30;
    str = (str.length > length) ? str.slice(0, length) : str;

    if (preserveWords) {
        str = str.substr(0, Math.min(str.length, str.lastIndexOf(' ')));
    }

    if (ellipses === undefined) {
        ellipses = '...';
    }
    ellipses = '' + ellipses;

    return str + ellipses;
}

export default truncate;
