var test = require('tape');
var filters = require('../src/filters');


var arrayLike = {
    0: 123,
    1: 234,
    2: 345,
    length: 3
};

var obj = {
    name: 'wy',
    age: 21
};

test('at', function(t) {
    var at = filters.at;
    t.equal(at([1, 2, 3], 1), 2);
    t.equal(at([1, 2, 3], -1), undefined);
    // if first argument is not a array ,samply return it;
    t.equal(at(123, 1), 123);
    t.equal(at(arrayLike, 2), 345);
    t.end();
});

test('concat', function(t) {
    var arrayLike = {
        0: 123,
        1: 234,
        2: 345,
        length: 3
    };
    var obj = {
        name: 'wy',
        age: 21
    };
    var concat = filters.concat;
    t.deepEqual(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    t.deepEqual(concat([1, 2, 3], 123), [1, 2, 3, 123]);
    t.deepEqual(concat(null, [4, 5, 6]), [4,5,6]);
    t.deepEqual(concat(123, 123), [123]);
    t.deepEqual(concat(arrayLike, [1, 2, 3]), [123, 234, 345, 1, 2, 3]);
    t.deepEqual(concat([1, 2, 3], obj), [1, 2, 3, obj]);
    t.end();
});

test('contains', function(t) {
    var contains = filters.contains;
    t.true(contains([1, 2, 3], 2));
    t.false(contains([1, 2, 3], 4));
    t.end();
});

test('first', function(t) {
    var first = filters.first;
    t.equal(first(['a', 'b', 'c']), 'a');
    t.equal(first(arrayLike), 123);
    t.equal(first([]), undefined);
    t.equal(first(123), undefined);
    t.equal(first(obj), undefined);
    t.end();
});

test('last', function(t) {
    var last = filters.last;
    t.equal(last(['a', 'b', 'c']), 'c');
    t.equal(last(arrayLike), 345);
    t.equal(last([]), undefined);
    t.equal(last(123), undefined);
    t.equal(last(obj), undefined);
    t.end();
});

test('join', function(t) {
    var join = filters.join;
    t.equal(join(['a', 'b', 'c'], '-'), 'a-b-c');
    t.equal(join(['a', 'b', 'c']), 'a,b,c');
    t.equal(join(arrayLike, '-'), '123-234-345');
    t.equal(join(obj), 'wy,21');
    t.equal(join(null), '');
    t.equal(join(undefined), '');
    t.end();
});

test('map', function(t) {
    var map = filters.map;
    var arr1 = map([1, 2, 3], function(val) {
        return val + 1;
    });
    t.deepEqual(arr1, [2, 3, 4]);

    var obj = {
        first: 'a',
        last: 'z'
    };
    var arr2 = map(obj, function(val) {
        return val.toUpperCase();
    });
    t.deepEqual(arr2, ['A', 'Z']);
    t.end();
});

test('range', function(t) {
    var range = filters.range;
    var arr = [];
    t.deepEqual(range([], 3), [0, 1, 2]);
    t.end();
});

test('reverse', function(t) {
    var reverse = filters.reverse;
    t.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
    t.deepEqual(reverse('abc'), 'cba');
    t.end();
});

test('size', function(t) {
    var size = filters.size;
    t.equal(size([1, 2, 3]), 3);
    t.equal(size('abc'), 3);
    t.end();
});