import util from './util/index';
import * as collectionFilters from './collection/index';
import * as mathFilters from './math/index';
import * as stringFilters from './string/index';
import * as otherFilters from './other/index';


function install(Vue) {
    util.each(collectionFilters, function(value, key) {
        Vue.filter(key, value);
    });

    util.each(mathFilters, function(value, key) {
        Vue.filter(key, value);
    });

    util.each(stringFilters, function(value, key) {
        Vue.filter(key, value);
    });

    util.each(otherFilters, function(value, key) {
        Vue.filter(key, value);
    });
}

if (typeof exports == 'object') {
    module.exports = install;
} else if (typeof define == 'function' && define.amd) {
    define([], function() {
        return install;
    });
} else if (window.Vue) {
    Vue.use(install);
}
