'use strict';

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

var filters = require('./filters');
var _ = require('underscore');

function install(Vue) {
    _.each(filters, function(value, key) {
        if(Vue.filter(key)){
            console.warn('[filter duplication]: A filter named '+ key + 'has already been installed.');
        }else{
            Vue.filter(key, value);
        }
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(install);
}

module.exports = install;
