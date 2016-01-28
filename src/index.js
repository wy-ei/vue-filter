import install from './install';


if (typeof exports == "object") {
  module.exports = install
} else if (typeof define == "function" && define.amd) {
  define([], function() {
    return install
  });
} else if (window.Vue) {
  Vue.use(install)
}
