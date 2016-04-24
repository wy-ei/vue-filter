import util from '../util/index';


/**
 * return minimum value in an array.It will compare two item by a certain key
 * if key provide.
 *
 * {{ [13,22,3,24 ] | min }} => 3
 * {{ list | min 'age' }} => {name:'ron',age:12}
 * list:[
 *  {name:'james',age:24},
 *  {name:'ron',age:12}
 * ]
 */

function min(arr, key) {
    var ret, min, computed;
    if (util.isArray(arr)) {
        min = Infinity;
        util.each(arr, function(val) {
            computed = util.get(val, key);
            if (computed < min) {
                min = computed;
                ret = val;
            }
        });
        return ret;
    } else {
        return arr;
    }
}

export default min;
