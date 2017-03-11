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
