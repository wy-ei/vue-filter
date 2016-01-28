/**
 * truncate text to a specified length.
 *
 * {{ 'this is a big city!' | truncate 10 '...' }} => this is...
 */

function truncate(str, length, truncation) {
  length = length || 30;
  truncation = typeof truncation === "string" ? truncation : "...";
  return (str.length + truncation.length > length ? str.slice(0, length - truncation.length) : str) + truncation;
};

export default truncate;