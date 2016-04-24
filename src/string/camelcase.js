/**
 * Converts a string into CamelCase.
 *
 * {{ some_else | camelcase }} => SomeElse
 * {{ some-else | camelcase }} => SomeElse
 */

function camelcase(str) {
    var re = /(?:^|[-_\/])(\w)/g;
    return str.toString().replace(re, function(_, c) {
        return c.toUpperCase();
    });
}

export default camelcase;
