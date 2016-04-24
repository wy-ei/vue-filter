var test = require('tape');
import * as methods from '../src/math/index';

test('max', function(t) {
    var max = methods.max;

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

    t.equal(max([1, 2, 3, 2, 1]), 3);
    t.equal(max(arr, 'age'), arr[0]);
    t.equal(max(arr, function(item) {
        return item.name.length;
    }), arr[3]);
    t.end();
});

test('min', function(t) {
    var min = methods.min;
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

    t.equal(min([3, 2, 1, 0, 1, 2, 3]), 0);
    t.equal(min(arr, 'age'), arr[3]);
    t.equal(min(arr, function(item) {
        return item.name.length;
    }), arr[0]);
    t.end();
});

test('sum', function(t) {
    var sum = methods.sum;
    t.equal(sum([1, 2, 3]), 6);
    t.equal(sum([1, 2, 3], 10), 16);
    t.equal(sum(123), 123);
    t.equal(sum('abc'), 'abc');
    t.end();
});


test('mean', function(t) {
    var mean = methods.mean;
    t.equal(mean([1, 2, 3]), 2);
    t.equal(mean('abc'), 'abc');
    t.end();
});
