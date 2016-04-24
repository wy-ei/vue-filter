var test = require('tape');
import * as methods from '../src/other/index';

test('defaults', function(t) {
    var defaults = methods.defaults;
    t.equal(defaults(1, 100), 1);
    t.equal(defaults(0, 100), 0);
    t.equal(defaults(undefined, 100), 100);
    t.equal(defaults(null, 100), 100);
    t.equal(defaults('', 'js'), 'js');
    t.equal(defaults('typescript', 'js'), 'typescript');
    t.end();
});

test('date', function(t) {
    var date = methods.date;
    var d = new Date;
    d.setFullYear(2016);
    d.setMonth(0);
    d.setDate(31);
    t.equal(date(d, '%F'), '2016-01-31');
    t.end();
});
