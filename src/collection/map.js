import util from '../util/index';
/*
 * returns a new collection of the results of each expression execution.
 *
 * {{ [1,2,3] | map increase }}
 *
 * new Vue({
 *   ...
 *   methods:{
 *     increase:function(val){return val+1;}
 *   }
 * })
 */

function map(arr, cb) {
    return util.map(arr, cb);
}

export default map;
