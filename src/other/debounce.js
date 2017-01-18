import util from '../util/index';

/**
 * debounce a function, the default dalay is 300ms
 * 
 * {{ func | debounce 300 }}
 */

function debounce(handler, delay) {
    if (!handler){
        return;
    }
    if (!delay) {
        delay = 300;
    }
    return util.debounce(handler, delay);
}

export default debounce;