var test = require('tape');
import * as methods from '../src/string/index';
test('trim', function(t) {
    var trim = methods.trim;
    t.equal(trim('    abc ', 'l'), 'abc ');
    t.equal(trim(' abc  ', 'r'), ' abc');
    t.equal(trim('  abc  '), 'abc');
    t.end();
});

test('append', function(t) {
    var append = methods.append;
    t.equal(append('abc', '-123'), 'abc-123');
    t.equal(append(1, '-123'), '1-123');
    t.equal(append('', '-123'), '-123');
    t.equal(append(null, '-123'), '-123');
    t.end();
});

test('prepend', function(t) {
    var prepend = methods.prepend;
    t.equal(prepend('abc', '123-'), '123-abc');
    t.equal(prepend(1, '123-'), '123-1');
    t.equal(prepend('', '123-'), '123-');
    t.equal(prepend(null, '123-'), '123-');
    t.end();
});

test('camelcase', function(t) {
    var camelcase = methods.camelcase;
    t.equal(camelcase('some_one'), 'SomeOne');
    t.equal(camelcase('some-one'), 'SomeOne');
    t.end();
});

test('remove', function(t) {
    var remove = methods.remove;
    t.equal(remove('a-b-c-d-e', '-'), 'abcde');
    t.equal(remove('a-b-c-d-e', '='), 'a-b-c-d-e');
    t.equal(remove(123, '='), 123);
    t.end();
});

test('split', function(t) {
    var split = methods.split;
    t.deepEqual(split('1-2-3', '-'), ['1', '2', '3']);
    t.equal(split(123, '-'), 123);
    t.end();
});

test('test', function(t) {
    var test = methods.test;
    t.equal(test('http://vue.org', '^http'), true);
    t.equal(test('http://vue.org', '^https'), false);
    t.end();
});

test('truncate', function(t) {
    var truncate = methods.truncate;
    t.equal(truncate('0123456789', 10), '0123456789');
    t.equal(truncate('0123456789abc', 10), '0123456...');
    t.equal(truncate('0123456789abc', 10, '---'), '0123456---');
    t.equal(truncate('abc', 10, '-'), 'abc');
    t.equal(truncate('abcde', 4, 1), 'abc1');
    t.end();
});


test('leftPad',function(t){
    var leftPad = methods.leftPad;
    t.equal(leftPad('abc',5,'*'),'**abc');
    t.equal(leftPad('abc',5),'  abc');
    t.equal(leftPad('abc',-1,'*'),'abc');
    t.end();
});

test('rightPad',function(t){
    var rightPad = methods.rightPad;
    t.equal(rightPad('abc',5,'*'),'abc**');
    t.equal(rightPad('abc',5),'abc  ');
    t.equal(rightPad('abc',-1,'*'),'abc');
    t.end();
});


test('repeat',function(t){
    var repeat = methods.repeat;
    t.equal(repeat('abc',1),'abc');
    t.equal(repeat('abc',3),'abcabcabc');
    t.equal(repeat('abc','3'),'abcabcabc');
    t.equal(repeat('abc','2.5'),'abcabc');
    t.equal(repeat('abc'),'');
    t.end();
});
