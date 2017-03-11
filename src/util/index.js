/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

var _ = require('underscore');
var util = {};


var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
util.isArrayLike = function (obj) {
    if (typeof obj !== 'object' || !obj) {
        return false;
    }
    var length = obj.length;
    return typeof length === 'number' &&
        length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;
};

util.get = function (obj, accessor) {
    var ret = undefined;
    if (!_.isObject(obj)) {
        return obj;
    }
    if (accessor == undefined) {
        return obj;
    }
    if (_.isString(accessor)) {
        accessor = accessor.split('.');
        ret = obj;
        try {
            for (var i = 0; i < accessor.length; i++) {
                ret = ret[accessor[i]];
            }
        } catch (e) {
            ret = undefined;
        }
    } else if (_.isFunction(accessor)) {
        ret = accessor(obj);
    }
    return ret;
};

util.deprecated = function(filter, msg){
    console.warn('[filter - ' + filter + ']:this filter has deprecated, it will be remove at next minor version. ' + msg);
};

util.type = function(filter, input, type){
    console.warn('[filter - ' + filter + ']: expect input type is :' + type + 'but got ' + typeof input);
};

module.exports = util;
