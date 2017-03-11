var test = require('tape');
var filters = require('../src/filters');

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
