var test = require('tape');
import * as filters from '../src/string/index';
test('trim', function(t) {
    var trim = filters.trim;
    t.equal(trim('    abc ', 'l'), 'abc ');
    t.equal(trim(' abc  ', 'r'), ' abc');
    t.equal(trim('  abc  '), 'abc');
    t.end();
});

test('append', function(t) {
    var append = filters.append;
    t.equal(append('abc', '-123'), 'abc-123');
    t.equal(append(1, '-123'), '1-123');
    t.equal(append('', '-123'), '-123');
    t.equal(append(null, '-123'), '-123');
    t.end();
});

test('prepend', function(t) {
    var prepend = filters.prepend;
    t.equal(prepend('abc', '123-'), '123-abc');
    t.equal(prepend(1, '123-'), '123-1');
    t.equal(prepend('', '123-'), '123-');
    t.equal(prepend(null, '123-'), '123-');
    t.end();
});

test('camelcase', function(t) {
    var camelcase = filters.camelcase;
    t.equal(camelcase('some_one'), 'SomeOne');
    t.equal(camelcase('some-one'), 'SomeOne');
    t.end();
});

test('remove', function(t) {
    var remove = filters.remove;
    t.equal(remove('a-b-c-d-e', '-'), 'abcde');
    t.equal(remove('a-b-c-d-e', '='), 'a-b-c-d-e');
    t.equal(remove(123, '='), 123);
    t.end();
});

test('split', function(t) {
    var split = filters.split;
    t.deepEqual(split('1-2-3', '-'), ['1', '2', '3']);
    t.equal(split(123, '-'), 123);
    t.end();
});

test('test', function(t) {
    var test = filters.test;
    t.equal(test('http://vue.org', '^http'), true);
    t.equal(test('http://vue.org', '^https'), false);
    t.end();
});

test('truncate', function(t) {
    var truncate = filters.truncate;
    t.equal(truncate('0123456789', 10), '0123456789');
    t.equal(truncate('0123456789abc', 10), '0123456789...');
    t.equal(truncate('0123456789abc', 10, '---'), '0123456789---');
    t.equal(truncate('abc', 10, '-'), 'abc');
    t.equal(truncate('abcde', 4, 1), 'abcd1');
    t.equal(truncate('abc defg h', 6, '...', true), 'abc...');
    t.equal(truncate('abc defg h', 9, '...', true), 'abc defg...');
    t.equal(truncate('abc defg h', 8, '...', false), 'abc defg...');
    t.end();
});


test('leftPad',function(t){
    var leftPad = filters.leftPad;
    t.equal(leftPad('abc',5,'*'),'**abc');
    t.equal(leftPad('abc',5),'  abc');
    t.equal(leftPad('abc',-1,'*'),'abc');
    t.end();
});

test('rightPad',function(t){
    var rightPad = filters.rightPad;
    t.equal(rightPad('abc',5,'*'),'abc**');
    t.equal(rightPad('abc',5),'abc  ');
    t.equal(rightPad('abc',-1,'*'),'abc');
    t.end();
});


test('repeat',function(t){
    var repeat = filters.repeat;
    t.equal(repeat('abc',1),'abc');
    t.equal(repeat('abc',3),'abcabcabc');
    t.equal(repeat('abc','3'),'abcabcabc');
    t.equal(repeat('abc','2.5'),'abcabc');
    t.equal(repeat('abc'),'');
    t.end();
});


test('uppercase', function (t) {
    var uppercase = filters.uppercase;
    t.equal(uppercase('FilTer'), 'FILTER');
    t.end();
});

test('lowercase', function (t) {
    var lowercase = filters.lowercase;
    t.equal(lowercase('AWEsoME'),'awesome');
    t.end();
});
