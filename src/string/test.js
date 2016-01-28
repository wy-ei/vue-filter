/**
 * Test if a string match a pattern
 *
 * {{ "http://vuejs.org" | test /^http/ }} => true
 */

function test(str, re, flag) {
  var re = new RegExp(re, flag);
  return re.test(str);
};

export default test;