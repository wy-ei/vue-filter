var util = require('../util/index');


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

function get(obj, accessor){
    return util.get(obj, accessor);
}

module.exports = get;