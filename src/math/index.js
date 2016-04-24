import base from './base';
import {
    plus,
    minus,
    multiply,
    divide,
    mod
} from './operator';
import max from './max';
import min from './min';
import sum from './sum';
import mean from './mean';


var abs = base.abs;
var acos = base.acos;
var asin = base.asin;
var atan = base.atan;
var atan2 = base.atan2;
var ceil = base.ceil;
var cos = base.cos;
var exp = base.exp;
var floor = base.floor;
var log = base.log;
var pow = base.pow;
var round = base.round;
var sin = base.sin;
var sqrt = base.sqrt;
var tan = base.tan;

export {
    abs,
    acos,
    asin,
    atan,
    atan2,
    ceil,
    cos,
    exp,
    floor,
    log,
    pow,
    round,
    sin,
    sqrt,
    tan,

    max,
    min,
    mean,
    sum,

    // + , - , * , / , %
    plus,
    minus,
    multiply,
    divide,
    mod
};
