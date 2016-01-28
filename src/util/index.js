var
  ArrayProto = Array.prototype,
  ObjProto = Object.prototype,
  FuncProto = Function.prototype;

var
  push = ArrayProto.push,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty;

var
  nativeIsArray = Array.isArray,
  nativeKeys = Object.keys,
  nativeBind = FuncProto.bind,
  nativeCreate = Object.create;

var util = {};

util.isArray = function(obj) {
  return Array.isArray ? Array.isArray(obj) :
    Object.prototype.toString.call(obj) === '[object Array]';
}

util.isArrayLike = function(obj) {
  var length = obj['length'],
    MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  return typeof length === 'number' && length > 0 && length < MAX_ARRAY_INDEX;
}

util.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}


util.each = function(obj, callback) {
  var i,
    len;
  if (util.isArray(obj)) {
    for (i = 0, len = obj.length; i < len; i++) {
      if (callback(obj[i], i, obj) === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      if (callback(obj[i], i, obj) === false) {
        break;
      }
    }
  }
  return obj;
};

util.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
  util['is' + name] = function(obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
});

util.keys = function(obj) {
  if (!util.isObject(obj)) {
    return [];
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
};

util.values = function(obj) {
  var keys = util.keys(obj);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
}

util.toArray = function(obj) {
  if (!obj) {
    return [];
  }
  if (util.isArray(obj)) {
    return slice.call(obj);
  }
  return util.values(obj);
};

util.map = function(obj, cb) {
  var keys = !util.isArrayLike(obj) && util.keys(obj),
    length = (keys || obj).length,
    results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = keys ? keys[index] : index;
    results[index] = cb(obj[currentKey], currentKey, obj);
  }
  return results;
};

util.get = function(obj, property) {
  if (!util.isObject(obj)) {
    return obj;
  }
  if (property == undefined) {
    return obj;
  }
  property = '' + property;
  var property = property.split('.'),
    ret = obj;
  try {
    for (var i = 0; i < property.length; i++) {
      ret = ret[property[i]];
    }
  } catch (e) {
    ret = undefined;
  }
  return ret;
}

export default util;
