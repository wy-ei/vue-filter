/**
 * Sets a default value for any variable with no assigned value
 *
 * The default value is returned if the variable resolves to null ,undefined or an empty string "".
 * A string containing whitespace characters and a number has value 0 will not resolve to the default value.
 *
 */
function defaults(value, dft) {
    // undefined and null and empty string
    if (value == null || value === '') {
        return dft;
    } else {
        return value;
    }
}

export default defaults;
