var _ = require('underscore');

/**
 * debounce a function, the default dalay is 300ms
 * 
 * {{ func | debounce(300) }}
 */

function debounce(handler, delay) {
    if (!handler){
        return;
    }
    if (!delay) {
        delay = 300;
    }
    return _.debounce(handler, delay);
}
module.exports = debounce;