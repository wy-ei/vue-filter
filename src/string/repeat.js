/**
 * Appends characters to a string.
 *
 * {{ 'abc' | repeat 3 }} => 'abcabcabc'
 */

function repeat(str, times) {
    times = times ? Number(times) : 0;
    if(times != times){ // NAN
        times = 0;
    }

    times = Math.floor(times);

    if(times <= -1){
        times = 0;
    }
    
    str = '' + str;

    var ret = '';
    while(times !== 0){
        if(times & 1 === 1){
            ret += str;
        }
        str += str;
        times >>>= 1;
    }
    return ret;
}

export default repeat;
