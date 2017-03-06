var test = require('tape');
var filters = require('../src/filters');

test('defaults', function(t) {
    var defaults = filters.defaults;
    t.equal(defaults(1, 100), 1);
    t.equal(defaults(0, 100), 0);
    t.equal(defaults(undefined, 100), 100);
    t.equal(defaults(null, 100), 100);
    t.equal(defaults('', 'js'), 'js');
    t.equal(defaults('typescript', 'js'), 'typescript');
    t.end();
});

test('date', function(t) {
    var date = filters.date;
    var d = new Date;
    d.setFullYear(2016);
    d.setMonth(0);
    d.setDate(31);
    t.equal(date(d, '%F'), '2016-01-31');
    t.end();
});

test('debounce', function (t) {
    var debounce = filters.debounce;
    var i = 0;

    var callback = function(){
        i += 1;
    };

    var handler = debounce(callback, 450);

    handler();
    t.equal(i, 0);

    handler();
    setTimeout(function () {
        t.equal(i, 0);
    }, 400);


    handler();
    setTimeout(function () {
        t.equal(i, 1);
        t.end();
    }, 500);
});
