/**
 * @description Uppercase a string
 * @example
 * ```
 * {{ 'abC' | uppercase }} => 'ABC'
 * ```
 */
function uppercase(value) {
    return (value || value === 0) ?
        value.toString().toUpperCase() :
        '';
}

/**
 * @description Lowercase a string
 * @example
 * ```
 * {{ 'abC' | uppercase }} => 'ABC'
 * ```
 */
function lowercase(value) {
    return (value || value === 0) ?
        value.toString().toLowerCase() :
        '';
}


/**
 * @description Converts a string into CamelCase.
 * @example
 * ```
 * {{ 'some_else' | camelcase }} => 'SomeElse'
 * {{ 'some-else' | camelcase }} => 'SomeElse'
 * ```
 */
function camelcase(str) {
    var re = /(?:^|[-_\/])(\w)/g;
    return str.toString().replace(re, function(_, c) {
        return c.toUpperCase();
    });
}



module.exports = {
    uppercase: uppercase,
    lowercase: lowercase,
    camelcase: camelcase
};