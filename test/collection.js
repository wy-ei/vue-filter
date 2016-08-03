var test = require('tape');
import * as methods from '../src/collection/index';


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
    var at = methods.at;
    t.equal(at([1, 2, 3], 1), 2);
    t.equal(at([1, 2, 3], -1), undefined);
    // if first argument is not a array ,samply return it;
    t.equal(at(123, 1), 123);
    t.equal(at(arrayLike, 2), 345);
    t.end();
});

test('concat', function(t) {
    var concat = methods.concat;
    t.deepEqual(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    t.deepEqual(concat([1, 2, 3], 123), [1, 2, 3]);
    t.deepEqual(concat(123, [4, 5, 6]), [4, 5, 6]);
    t.deepEqual(concat(123, 123), []);
    t.deepEqual(concat(arrayLike, [1, 2, 3]), [123, 234, 345, 1, 2, 3]);
    t.deepEqual(concat(obj, [1, 2, 3]), ['wy', 21, 1, 2, 3]);
    t.end();
});

test('contains', function(t) {
    var contains = methods.contains;
    t.true(contains([1, 2, 3], 2));
    t.false(contains([1, 2, 3], 4));
    t.true(contains(['1', 2, 3], function(val) {
        return typeof val == 'string';
    }));
    t.false(contains([2, 4, 6], function(val) {
        return val % 2 == 1;
    }));
    t.end();
});

test('first', function(t) {
    var first = methods.first;
    t.equal(first(['a', 'b', 'c']), 'a');
    t.equal(first(arrayLike), 123);
    t.equal(first([]), undefined);
    t.equal(first(123), 123);
    t.equal(first(obj), obj);
    t.end();
});

test('last', function(t) {
    var last = methods.last;
    t.equal(last(['a', 'b', 'c']), 'c');
    t.equal(last(arrayLike), 345);
    t.equal(last([]), undefined);
    t.equal(last(123), 123);
    t.equal(last(obj), obj);
    t.end();
});

test('join', function(t) {
    var join = methods.join;
    t.equal(join(['a', 'b', 'c'], '-'), 'a-b-c');
    t.equal(join(['a', 'b', 'c']), 'a,b,c');
    t.equal(join(arrayLike, '-'), '123-234-345');
    t.equal(join(obj), obj);
    t.equal(join(obj), obj);
    t.equal(join(null), null);
    t.equal(join(undefined), undefined);
    t.end();
});

test('map', function(t) {
    var map = methods.map;
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
    var range = methods.range;
    var arr = [];
    t.deepEqual(range(arr, 3), [0, 1, 2]);
    t.end();
});

test('reverse', function(t) {
    var reverse = methods.reverse;
    t.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
    t.deepEqual(reverse('abc'), 'cba');
    t.end();
});

test('size', function(t) {
    var size = methods.size;
    t.equal(size([1, 2, 3]), 3);
    t.equal(size('abc'), 3);
    t.end();
});
