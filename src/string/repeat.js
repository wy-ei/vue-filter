/**
 * @description return a string which build by repeat the given str n times.
 *
 * {{ 'abc' | repeat 3 }} => 'abcabcabc'
 */

function repeat(str, n) {
    n = n ? Number(n) : 0;
    if(n != n){ // NAN
        n = 0;
    }

    n = Math.floor(n);

    if(n <= -1){
        n = 0;
    }
    
    str = '' + str;

    var ret = '';
    while(n !== 0){
        if(n & 1 === 1){
            ret += str;
        }
        str += str;
        n >>>= 1;
    }
    return ret;
}

module.exports = repeat;
