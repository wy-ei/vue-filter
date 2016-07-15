/**
 * truncate text to a specified length.
 *
 * {{ 'this is a big city!' | truncate 10 '...' }} => this is...
 */

function truncate(str, length, ellipses) {
    length = length || 30;
    if(ellipses === undefined){
        ellipses = '...';
    }
    ellipses = '' + ellipses;
    return (str.length > length ? str.slice(0, length - ellipses.length) + ellipses : str);
}

export default truncate;
