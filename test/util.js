var test = require('tape');
var util = require('../src/util/index');


test('isArrayLike', function (t) {
    var isArrayLike = util.isArrayLike;
    t.equal(isArrayLike(null), false, '`null` is not an ALO');
    t.equal(isArrayLike(undefined), false, '`undefined` is not an ALO');
    t.equal(isArrayLike(true), false, '`true` is not an ALO');
    t.equal(isArrayLike(false), false, '`false` is not an ALO');
    t.equal(isArrayLike(function () {}), false, '`function` is not an ALO');
    t.equal(isArrayLike(''), false, '`string` is not an ALO');
    t.equal(isArrayLike('abc'), false, '`string` is not an ALO');

    t.equal(isArrayLike([]), true, '`[]` is a simple ALO');
    t.equal(isArrayLike(arguments), true, '`arguments` is a simple ALO');
    t.equal(isArrayLike({ length: 0 }), true, '`{ length: 0 }` is a simple ALO');
    t.equal(isArrayLike({ length: 0.1 }), false, 'length of 0.1 is not valid');
    t.end();
});


test('get', function(t) {
    var get = util.get;
    var obj = {
        name: {
            first: 'w',
            second: 'y'
        },
        skill: {
            it: {
                web: ['js', 'css', 'html']
            }
        }
    };

    t.equal(get(obj, 'name.first'), 'w');
    t.deepEqual(get(obj, 'skill.it.web'), ['js', 'css', 'html']);
    t.equal(get(obj, 'skill.it.tools'), undefined);
    t.equal(get(1, 'skill.it.web'), 1);

    t.equal(get(obj, function(obj) {
        return obj.skill.it.web[2];
    }), 'html');

    var arr = [{
        name: 'ww',
        age: 31
    }, {
        name: 'yyy',
        age: 21
    }, {
        name: 'zz',
        age: 26
    }, {
        name: 'xxxx',
        age: 18
    }];

    t.equal(get(arr, function(arr) {
        return arr[0].name.length;
    }), 2);
    t.end();
});
