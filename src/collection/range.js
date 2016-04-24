/**
 *  Return a new collection from a given length
 *
 *  {{ [] | range 4 }} => [0,1,2,3]
 */

function range(arr, n) {
    arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}
export default range;
