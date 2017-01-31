/**
 * truncate text to a specified length.
 *
 * {{ 'this is a big city!' | truncate 15 '...' true }} => this is a...
 */

function truncate(str, length, ellipses, preserveWords) {
    length = length || 30;

    if (ellipses === undefined) {
        ellipses = '...';
    }
    ellipses = '' + ellipses;

    str = (str.length > length) ? str.slice(0, length - ellipses.length) : str;

    if (preserveWords) {
        str = str.substr(0, Math.min(str.length, str.lastIndexOf(' ')));
    }

    return str + ellipses;
}

export default truncate;
