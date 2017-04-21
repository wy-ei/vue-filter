
/**
 * return a string by repeat a char n times
 */

function padding(size,ch){
    var str = '';
    if(!ch && ch !== 0){
        ch = ' ';
    }
    while(size !== 0){
        if(size & 1 === 1){
            str += ch;
        }
        ch += ch;
        size >>>= 1;
    }
    return str;
}


/**
 * @description leftPad
 * @example
 * ```
 * {{ 'abc' | leftPad(5, '*') }} => '**abc'
 * ```
 */
function leftPad(str,size,ch){
    size = +size || 0;
    var padLength = size - str.length;
    if(padLength <= 0){
        return str;
    }
    return padding(padLength,ch).concat(str);
}


/**
 * @description rightPad
 * ```
 * {{ 'abc' | leftPad(5, '*') }} => 'abc**'
 * ```
 */
function rightPad(str,size,ch){
    size = +size || 0;
    var padLength = size - str.length;
    if(padLength <= 0){
        return str;
    }
    return str.concat(padding(padLength,ch));
}

module.exports = {
    leftPad: leftPad,
    rightPad: rightPad
};
