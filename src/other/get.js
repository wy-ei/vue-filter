import util from '../util/index';


/**
 * Get a property inside an Object
 * 
 * james = {
 *     contact:{
 *         tel: 187xxxx0001
 *     }
 * }
 * {{ james | get 'contact.tel' }} => 187xxxx0001
 */

function get(object, accessor){
    return util.get(object, accessor);
}

export default get;