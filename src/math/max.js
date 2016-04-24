import util from '../util/index';

/**
 * return maximum value in an array.It will compare two item by a certain key
 * if key provide.
 *
 * {{ [13,22,3,24 ] | max }} => 24
 * {{ list | max 'age' }} => {name:'james',age:24}
 * list:[
 *  {name:'james',age:24},
 *  {name:'ron',age:12}
 * ]
 */


function max(arr, key) {
    var ret, max, computed;
    if (util.isArray(arr)) {
        max = -Infinity;
        util.each(arr, function(val) {
            computed = util.get(val, key);
            if (computed > max) {
                max = computed;
                ret = val;
            }
        });
        return ret;
    } else {
        return arr;
    }
}


export default max;
