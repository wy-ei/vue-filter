import util from '../util/index';
/*
 * get a random value from a collection
 *
 * {{ [1,2,3,4] | random }} => 1 or 2 or 3 or 4
 */

function random(collection) {
    if (!collection) {
        return undefined;
    }
    if (util.isObject(collection)) {
        collection = util.toArray(collection);
    }
    if (util.isArrayLike(collection) && collection.length != 0) {
        var i = Math.floor(collection.length * Math.random());
        return collection[i];
    } else {
        // not arrayLike and object or is a empty array or object
        return collection;
    }
}

export default random;
