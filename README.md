# vue-filter [![](https://travis-ci.org/wy-ei/vue-filter.svg)](https://travis-ci.org/wy-ei/vue-filter)

**A collection of [Vue.js](https://github.com/vuejs/vue) filter**

**Notice: Normally, you will only use few filters in your project, so you don't need to import this library entirely. Consider use a library like [Lodash](https://github.com/lodash/lodash) and write the filter you need by yourself.** 

## How to use ?

### step 1. Install vue-filter

You can install it from npm:

```sh
npm install vue-filter --save
```

or copy the file at [here](https://raw.githubusercontent.com/wy-ei/vue-filter/master/dist/vue-filter.min.js).


If you include the file with `<script>` tag, the filters will be installed automatically. But please make sure put the `vue-filter` script behind Vue.

```html
<script src="vue.min.js"></script>
<script src="vue-filter.min.js"></script>
```

If you use a bundle tools like webpack, you need install the filters manually.
As from Vue 2.0 you have to install the extension using the `Vue.use()` sytax.


```js
import VueFilter from 'vue-filter';
import Vue from 'vue';

// Vue.install(vueFilter); // Vue V1 
Vue.use(VueFilter);        // Vue V2
```


### step 2. use filter


```js
data: {
  list: [{
      name: 'James, LeBron',
      score: 38
  },{
      name: 'Irving, Kyrie',
      score: 43
  },{
      name: 'Jefferson, Richard',
      score: 11
  }]
}

// get sum of score.
{{ list | map(player => player.score) | sum  }} => 92

// top score.
{{ list | max(player => player.score) | get('score') }} => 43
```

## Filter List

Click the filter to see how to use it.

### Collection Filters

- [map](#map)
- [at](#at)
- [reduce](#reduce)
- [find](#find)
- [filter](#filter)
- [reject](#reject)
- [every](#every)
- [some](#some)
- [contains](#contains)
- [pluck](#pluck)
- [max](#max)
- [min](#min)
- [sortBy](#sortby)
- [groupBy](#groupby)
- [indexBy](#indexby)
- [countBy](#countby)
- [shuffle](#shuffle)
- [sample](#sample)
- [toArray](#toarray)
- [size](#size)

### Array Filters


- [first](#first)
- [initial](#initial)
- [last](#last)
- [rest](#rest)
- [flatten](#flatten)
- [without](#without)
- [union](#union)
- [intersection](#intersection)
- [difference](#difference)
- [uniq](#uniq)
+ [join](#join)
+ [reverse](#reverse)
+ [concat](#concat)


### String Filters

+ [append](#append)
+ [prepend](#prepend)
+ [camelcase](#camelcase)
+ [replace](#replace)
+ [substring](#strstring)
+ [substr](#substr)
+ [truncate](#truncate)
+ [split](#split)
+ [trim](#trim)
+ [trimLeft](#trimleft)
+ [trimRight](#trimright)
+ [test](#test)
+ [leftPad](#leftpad)
+ [rightPad](#rightpad)
+ [repeat](#repeat)
+ [lowercase](#lowercase)
+ [uppercase](#uppercase)
+ [nl2br](#nl2br)

### Object Filters

- [keys](#keys)
- [allKeys](#allkeys)
- [values](#values)
- [pairs](#pairs)
- [invert](#invert)
- [extend](#extend)
- [pick](#pick)
- [omit](#omit)
- [defaults](#defaults)
- [has](#has)

### Math Filters

+ [abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,pow,round,sin,sqrt,tan](#math-method-function)
+ [sum](#sum)
+ [mean](#mean)
+ [plus](#plus)
+ [minus](#minus)
+ [multiply](#multiply)
+ [divide](#divide)
+ [mod](#mod)
+ [toFixed](#tofixed)
+ [toPrecision](#toprecision)


### Other Filters

- [escape](#escape)
- [unescape](#unescape)
- [result](#result)
- [date](#date)
- [get](#get)


## Filter Usage

### Collection Filters

#### map

Produces a new array of values by mapping each value in **list** through a transformation function ([**iteratee**](#iteratee)). The iteratee is passed three arguments: the `value`, then the `index` (or `key`) of the iteration, and finally a reference to the entire `list`.

```javascript
{{ [1,2,3] | map(function (n){ return n * 2; }) }} => [2,4,6]

{{ [1,2,3] | map(function (num){ return num * 3; }) }} => [3,6,9]

{{ {"one":1,"two":2,"three":3} | map(function (num, key){ return num * 3; }) }} => [3,6,9]
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### at

Returns the item at the specified index location in an array or a string.

```javascript
{{ ['a','b','c'] | at(1) }} => 'b'
{{ 'hello' | at(1) }} => 'e'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### reduce

Also known as **inject** and **foldl**, reduce boils down a **list** of values into a single value. **Memo** is the initial state of the reduction, and each successive step of it should be returned by **iteratee**. The iteratee is passed four arguments: the `memo`, then the `value` and `index` (or key) of the iteration, and finally a reference to the entire `list`.

If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

```javascript
{{ [1,2,3] | reduce(function (memo, num){ return memo + num; }, 0) }} => 6
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### find

Looks through each value in the **list**, returning the first one that passes a truth test (**predicate**), or `undefined` if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

```javascript
{{ [1,2,3,4,5,6] | find(function (num){ return num % 2 == 0; }) }} =>
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### filter

Looks through each value in the **list**, returning an array of all the values that pass a truth test (**predicate**).

```javascript
{{ [1,2,3,4,5,6] | filter(function (num){ return num % 2 == 0; }) }} => [2,4,6]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### reject


Returns the values in **list** without the elements that the truth test (**predicate**) passes. The opposite of **filter**.

```javascript
{{ [1,2,3,4,5,6] | reject(function (num){ return num % 2 == 0; }) }} => [1,3,5]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### every

Returns _true_ if all of the values in the **list** pass the **predicate** truth test. Short-circuits and stops traversing the list if a false element is found.

```javascript
{{ [2,4,5] | every(function (num) { return num % 2 == 0; }) }} => false
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### some

Returns _true_ if any of the values in the **list** pass the **predicate** truth test. Short-circuits and stops traversing the list if a true element is found.

```javascript
{{ [null,0,"yes",false] | some(val => !val ) }} => true
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### contains

Returns _true_ if the **value** is present in the **list**. Uses **indexOf** internally, if **list** is an Array. Use **fromIndex** to start your search at a given index.

```javascript
{{ [1,2,3] | contains(3) }} => true
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### pluck


A convenient version of what is perhaps the most common use-case for **map**: extracting a list of property values.

```javascript
{{ [{
  "name": "moe",
  "age": 40
}, {
  "name": "larry",
  "age": 50
}, {
  "name": "curly",
  "age": 60
}] | pluck("name") }} => ["moe","larry","curly"]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### max


Returns the maximum value in **list**. If an [**iteratee**](#iteratee) function is provided, it will be used on each value to generate the criterion by which the value is ranked. _-Infinity_ is returned if **list** is empty, so an [isEmpty](#isEmpty) guard may be required. Non-numerical values in **list** will be ignored.

```javascript
{{ [{
  "name": "moe",
  "age": 40
}, {
  "name": "larry",
  "age": 50
}, {
  "name": "curly",
  "age": 60
}] | max(function (stooge){ return stooge.age; }) }} => {"name":"curly","age":60}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### min


Returns the minimum value in **list**. If an [**iteratee**](#iteratee) function is provided, it will be used on each value to generate the criterion by which the value is ranked. _Infinity_ is returned if **list** is empty, so an [isEmpty](#isEmpty) guard may be required. Non-numerical values in **list** will be ignored.

```javascript
{{ [10,5,100,2,1000] | min }} => 2
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### sortBy


Returns a (stably) sorted copy of **list**, ranked in ascending order by the results of running each value through [**iteratee**](#iteratee). iteratee may also be the string name of the property to sort by (eg. `length`).

```javascript
{{ [1,2,3,4,5,6] | sortBy(function (num){ return Math.sin(num); }) }} => [5,4,6,3,1,2]

{{ [{
  "name": "moe",
  "age": 40
}, {
  "name": "larry",
  "age": 50
}, {
  "name": "curly",
  "age": 60
}] | sortBy("name") }}
=>
[{
  "name": "curly",
  "age": 60
}, {
  "name": "larry",
  "age": 50
}, {
  "name": "moe",
  "age": 40
}]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### groupBy


Splits a collection into sets, grouped by the result of running each value through **iteratee**. If **iteratee** is a string instead of a function, groups by the property named by **iteratee** on each of the values.

```javascript
{{ [1.3, 2.1, 2.4] | groupBy(function (num){ return Math.floor(num); }) }} => {"1":[1.3],"2":[2.1,2.4]}

{{ ["one","two","three"] | groupBy("length") }} => {"3":["one","two"],"5":["three"]}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### indexBy


Given a **list**, and an [**iteratee**](#iteratee) function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like [groupBy](#groupBy), but for when you know your keys are unique.

```javascript
{{ [{
  "name": "moe",
  "age": 40
}, {
  "name": "larry",
  "age": 50
}, {
  "name": "curly",
  "age": 60
}] | indexBy("age") }} =>
{
  "40": {
    "name": "moe",
    "age": 40
  },
  "50": {
    "name": "larry",
    "age": 50
  },
  "60": {
    "name": "curly",
    "age": 60
  }
}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### countBy


Sorts a list into groups and returns a count for the number of objects in each group. Similar to `groupBy`, but instead of returning a list of values, returns a count for the number of values in that group.

```javascript
{{ [1,2,3,4,5] | countBy(function (num) {
  return num % 2 == 0 ? 'even': 'odd';
}) }} => {"odd":3,"even":2}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### shuffle


Returns a shuffled copy of the **list**, using a version of the [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

```javascript
{{ [1,2,3,4,5,6] | shuffle }} => [5,2,3,6,1,4]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### sample


Produce a random sample from the **list**. Pass a number to return **n** random elements from the list. Otherwise a single random item will be returned.

```javascript
{{ [1,2,3,4,5,6] | sample }} => one element

{{ [1,2,3,4,5,6] | sample(3) }} => there elements
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### toArray


Creates a real Array from the **list** (anything that can be iterated over). Useful for transmuting the **arguments** object.

```javascript
{{ {"0":1,"1":2,"2":3,"3":4} | toArray }} => [1,2,3,4]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### size


Return the number of values in the **list**.

```javascript
{{ {"one":1,"two":2,"three":3} | size }} => 3
```

## Array Functions

_Note: All array functions will also work on the **arguments** object. However, Underscore functions are not designed to work on "sparse" arrays._

### Array Filters


#### first

Returns the first element of an **array**. Passing **n** will return the first **n** elements of the array.

```javascript
{{ [5,4,3,2,1] | first }} => 5

{{ [1,2] | first(0, [[1,2],[3,4]]) }} => 1

{{ [3,4] | first(1, [[1,2],[3,4]]) }} => 3
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### initial


Returns everything but the last entry of the array. Especially useful on the arguments object. Pass **n** to exclude the last **n** elements from the result.

```javascript
{{ [5,4,3,2,1] | initial }} => [5,4,3,2]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### last


Returns the last element of an **array**. Passing **n** will return the last **n** elements of the array.

```javascript
{{ [5,4,3,2,1] | last }} => 1
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### rest

Returns the **rest** of the elements in an array. Pass an **index** to return the values of the array from that index onward.

```javascript
{{ [5,4,3,2,1] | rest }} => [4,3,2,1]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### flatten


Flattens a nested **array** (the nesting can be to any depth). If you pass **shallow**, the array will only be flattened a single level.

```javascript
{{ [1,[2],[3,[[4]]]] | flatten }} => [1,2,3,4]

{{ [1,[2],[3,[[4]]]] | flatten(true) }} => [1,2,3,[[4]]]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### without


Returns a copy of the **array** with all instances of the **values** removed.

```javascript
{{ [1,2,1,0,3,1,4] | without(0, 1) }} => [2,3,4]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### union


Computes the union of the passed-in **arrays**: the list of unique items, in order, that are present in one or more of the **arrays**.

```javascript
{{ [1,2,3] | union([101,2,1,10], [2,1]) }} => [1,2,3,101,10]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### intersection


Computes the list of values that are the intersection of all the **arrays**. Each value in the result is present in each of the **arrays**.

```javascript
{{ [1,2,3] | intersection([101,2,1,10], [2,1]) }} => [1,2]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### difference


Similar to **without**, but returns the values from **array** that are not present in the **other** arrays.

```javascript
{{ [1,2,3,4,5] | difference([5,2,10]) }} => [1,3,4]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### uniq

Produces a duplicate-free version of the **array**, using _===_ to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the **array** is sorted, passing _true_ for **isSorted** will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an [**iteratee**](#iteratee) function.

```javascript
{{ [1,2,1,4,1,3] | uniq }} => [1,2,4,3]
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### join

Joins the elements of an array with the character passed as the parameter.
The result is a single string.

```javascript
{{ ['a','b','c'] | join('-') }} => 'a-b-c'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### reverse

Reverse an array or a string.

```javascript
{{ 'abc' | reverse }} => 'cba'
{{ [1,2,3] | reverse }} => [3,2,1]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### concat

Concatenates an array into another one.

```  js
{{ [1,2,3] | concat([4,5,6]) }} => [1,2,3,4,5,6]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>


### String Filters

#### replace

```javascript
{{ 'ab-cd' | replace('-', '') }}  => 'abcd'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### substr

```javascript
{{ 'javascript' | substr(0, 4) }} => 'java'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### substring

```javascript
{{ 'javascript' | substring(0,2) }} => 'ja'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### append

Appends characters to a string.

```javascript
{{ 'sky' | append('.jpg') }} => 'sky.jpg'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### prepend

Prepends characters to a string.

```javascript
{{ 'world' | prepend('hello ') }} => 'hello world'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>


#### camelcase

Converts a string into CamelCase.

```javascript
{{ "some_else" | camelcase }} => "SomeElse"
{{ "some-else" | camelcase }} => "SomeElse"
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### truncate

Truncate text to a specified length.

```javascript
{{ 'this is a big city!' | truncate(10, '...') }} => 'this is a ...'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### split

The split filter takes on a substring as a parameter.The substring is used as a delimiter to divide a string into an array.

```javascript
{{ 'a-b-c-d' | split('-') }} => [a,b,c,d]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### trim

Strips tabs, spaces, and newlines (all whitespace) from the left or right or both side of a string.which depends on second argument.

```javascript
{{ '   some spaces   ' | trim }} => 'some spaces'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### trimLeft

```javascript
{{ '   some spaces   ' | trimLeft }} => 'some spaces   '
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### trimRight

```javascript
{{ '   some spaces   ' | trimRight }} => '   some spaces'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### test

Test if a string match a pattern.

```javascript
{{ "http://vuejs.org" | test("^http") }} => true
// second param is regExp flag
{{ "VUE" | test("vue", "i") }} => true
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### leftPad

Pad a string on left.

```javascript
{{ 'abc' | leftPad(5, '*') }} => '**abc'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### rightPad

Pad a string on right.

```javascript
{{ 'abc' | rightPad(5, '*') }} => 'abc**'
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### repeat

Repeat a string n times.

```javascript
{{ 'abc' | repeat(3) }} => 'abcabcabc'
{{ 'abc' | repeat('3') }} => 'abcabcabc'
{{ 'abc' | repeat(0) }} => ''
{{ 'abc' | repeat }} => ''
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### lowercase

Lowercase a string.

```javascript
{{ 'Vue' | lowercase }} => 'vue'
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### uppercase

Uppercase a string.

```javascript
{{ 'Vue' | uppercase }} => 'VUE'
```

#### nl2br

Replace new lines by `<br/>` tags. This returns a string conainting html tag so in order
to prevent vue from escaping the tags special rendering is needed: `{{{ triple handlebars }}}` in Vue 1.0, `v-html` with direct filter function in Vue 2.0


```
// Vue 1.0
<p> {{{ text | nl2br }}} </p>

// Vue 2.0
<p v-html="$options.filters.nl2br(text)"></p>
```
 

### Object Filters

#### keys

Retrieve all the names of the **object**'s own enumerable properties.

```javascript
{{ {"one":1,"two":2,"three":3} | keys }} => ["one","two","three"]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### allKeys

Retrieve _all_ the names of **object**'s own and inherited properties.

```javascript
{{ {"name":"Moe"} | allKeys }} => ["name","silly"]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### values


Return all of the values of the **object**'s own properties.

```javascript
{{ {"one":1,"two":2,"three":3} | values }} => [1,2,3]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### pairs


Convert an object into a list of `[key, value]` pairs. The opposite of [object](#object).

```javascript
{{ {"one":1,"two":2,"three":3} | pairs }} => [["one",1],["two",2],["three",3]]
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### invert


Returns a copy of the **object** where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.

```javascript
{{ {
    "Moe": "Moses",
    "Larry": "Louis",
    "Curly": "Jerome"
} | invert }} =>
{
    "Moses": "Moe",
    "Louis": "Larry",
    "Jerome": "Curly"
}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### extend


Shallowly copy all of the properties **in** the **source** objects over to the **destination** object, and return the **destination** object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source will override properties of the same name in previous arguments.

```javascript
{{ {"name":"moe"} | extend({"age":50}) }} => {"name":"moe","age":50}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### pick


Return a copy of the **object**, filtered to only have values for the whitelisted **keys** (or array of valid keys). Alternatively accepts a predicate indicating which keys to pick.

```javascript
{{ {"name":"moe","age":50,"userid":"moe1"} | pick("name", "age") }} => {"name":"moe","age":50}

{{ {"name":"moe","age":50,"userid":"moe1"} | pick(function (value, key, object) {
  return typeof value === 'number'
}) }} => {"age":50}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### omit


Return a copy of the **object**, filtered to omit the blacklisted **keys** (or array of keys). Alternatively accepts a predicate indicating which keys to omit.

```javascript
{{ {"name":"moe","age":50,"userid":"moe1"} | omit("userid") }} => {"name":"moe","age":50}

{{ {"name":"moe","age":50,"userid":"moe1"} | omit(function (value, key, object) {
  return typeof value === 'number'
}) }} => {"name":"moe","userid":"moe1"}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### defaults


Returns **object** after filling in its `undefined` properties with the first value present in the following list of **defaults** objects.

```javascript
{{ {"flavor":"chocolate"} | defaults({"flavor":"vanilla","sprinkles":"lots"}) }} => {"flavor":"chocolate","sprinkles":"lots"}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### has


Does the object contain the given key? Identical to `object.hasOwnProperty(key)`, but uses a safe reference to the `hasOwnProperty` function, in case it's been [overridden accidentally](http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/).

```javascript
{{ {"a":1,"b":2,"c":3} | has("b") }} => true
```

### Math Filters

### Math method function

`abs`,`acos`,`asin`,`atan`,`atan2`,`ceil`,`cos`,`exp`,`floor`,`log`,`pow`,`round`,`sin`,`sqrt`,`tan`


```javascript
{{ -1.2 | abs }}  => 1.2
{{ 1 | acos }}  => 0
{{ 1.3 | ceil }} => 2
{{ 3 | pow(2) }} => 9  i.e: Math.pow(3,2)
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### sum

Get sum of all values in an array.

```javascript
{{ [1,2,3] | sum }} => 6
you can give an option argument as initial value
{{ [1,2,3] | sum(10) }} = 16
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### mean

Return mean value of a array.

```javascript
{{ [1,2,3,4] | mean }} => 2.5
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### min


Returns the minimum value in **list**. If an [**iteratee**](#iteratee) function is provided, it will be used on each value to generate the criterion by which the value is ranked. _Infinity_ is returned if **list** is empty, so an [isEmpty](#isEmpty) guard may be required. Non-numerical values in **list** will be ignored.

```javascript
{{ [10,5,100,2,1000] | min }} => 2
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### max


Returns the maximum value in **list**. If an [**iteratee**](#iteratee) function is provided, it will be used on each value to generate the criterion by which the value is ranked. _-Infinity_ is returned if **list** is empty, so an [isEmpty](#isEmpty) guard may be required. Non-numerical values in **list** will be ignored.

```javascript
{{ [{
    "name":"moe","age":40
},{
    "name":"larry","age":50
},{
    "name":"curly","age":60
}] | max(function (stooge){
    return stooge.age;
}) }} => {"name":"curly","age":60}
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### plus

Adds a number to an output.

```javascript
{{ 10 | plus(2) }} => 12
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### minus

Subtracts a number from an output.

```javascript
{{ 12 | minus(2) }} => 10
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### multiply

Multiplies an output by a number.

```javascript
{{ 10 | multiply(2) }} => 20
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### divide

Divides an output by a number

```javascript
{{ 10 | divide(4) }} => 2.5
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### mod

Divides an output by a number and returns the remainder.

```javascript
{{ 10 | mod(3) }} => 1
```

#### toFixed

```javascript
{{ 3.1415926 | toFixed(4) }} => "3.1415"
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### toPrecision

```javascript
{{ 3.1415926 | toPrecision(3) }} => "3.14"

{{ 1 | toPrecision(3) }} => "1.00"
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

### Other Filters

#### escape

Escapes a string for insertion into HTML, replacing `&`, `<`, `>`, `"`, ```, and `'` characters.

```javascript
{{ "Curly, Larry & Moe" | escape }} => "Curly, Larry &amp; Moe"
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### unescape


The opposite of [**escape**](#escape), replaces `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#96;` and `&#x27;` with their unescaped counterparts.

```javascript
{{ "Curly, Larry &amp; Moe" | unescape }} => "Curly, Larry & Moe"
```


<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### result


If the value of the named **property** is a function then invoke it with the **object** as context; otherwise, return it. If a default value is provided and the property doesn't exist or is undefined then the default will be returned. If `defaultValue` is a function its result will be returned.

```javascript
{{ {"cheese":"crumpets"} | result("cheese") }} => "crumpets"

{{ {"cheese":"crumpets"} | result("meat", "ham") }} => "ham"
```

<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### date

Converts a timestamp into another date format.

```javascript
{{ Date.now() | date('%T') }}  => current time, format like: '13:34:36'
{{ 'Wed Jan 20 2016 13:34:36 GMT+0800' | date('%T') }} => '13:34:36'
{{ 1453268193752 | date('%Y-%m-%d') }} => '2016-01-20'
{{ new Date | date('%I:%M:%s %p') }} => '1:39:22 PM'
```

**More date parameters are listed below:**

**Notice**: In column 3 of the table below, ｜(a special symbol) is not | (used to split data and filter), because of the syntax of markdown we can't use | inside a table.

| Param | Explanation | Example |
|:-----:|:-----|:-----|
|%a | Abbreviated weekday. | `{{ timestamp｜date "%a" }} => "Sat" ` |
|%A |Full weekday name. |`{{ timestamp｜date "%A" }} => "Tuesday" `|
|%b |Abbreviated month name. |`{{ timestamp｜date "%b" }} => "Jan" `|
|%B |Full month name |`{{ timestamp｜date "%B" }} => "January" `|
|%c |Preferred local date and time representation |`{{ timestamp｜date "%c" }} => "Tue Apr 22 11:16:09 2014" `|
|%d |Day of the month, zero-padded (01, 02, 03, etc.). |`{{ timestamp｜date "%d" }} => "04" `|
|%-d |Day of the month, not zero-padded (1,2,3, etc.). |`{{ timestamp｜date "%-d" }} => "4" `|
|%D |Formats the date (dd/mm/yy). |`{{ timestamp｜date "%D" }} => "04/22/14" `|
|%e |Day of the month, blank-padded ( 1, 2, 3, etc.). |`{{ timestamp｜date "%e" }} => "3" `|
|%F |Returns the date in ISO 8601 format (yyyy-mm-dd). |`{{ timestamp｜date "%F" }} => "2014-04-22" `|
|%H |Hour of the day, 24-hour clock (00 - 23). |`{{ timestamp｜date "%H" }} => "15" `|
|%I |Hour of the day, 12-hour clock (1 - 12). |`{{ timestamp｜date "%I" }} => "7" `|
|%j |Day of the year (001 - 366). |`{{ timestamp｜date "%j" }} => "245" `|
|%k |Hour of the day, 24-hour clock (1 - 24). |`{{ timestamp｜date "%k" }} => "14" `|
|%m |Month of the year (01 - 12). |`{{ timestamp｜date "%m" }} => "04" `|
|%M |Minute of the hour (00 - 59). |`{{ timestamp｜date "%M" }} => "53" `|
|%p |Meridian indicator (AM/PM). |`{{ timestamp｜date "%p" }} => "PM" `|
|%r |12-hour time (%I:%M:%S %p) |`{{ timestamp｜date "%r" }} => "03:20:07 PM" `|
|%R |24-hour time (%H:%M) |`{{ timestamp｜date "%R" }} => "15:21" `|
|%T |24-hour time (%H:%M:%S) |`{{ timestamp｜date "%T" }} => "15:22:13" `|
|%U |The number of the week in the current year, starting with the first Sunday as the first day of the first week. |`{{ timestamp｜date "%U" }} => "16" `|
|%W |The number of the week in the current year, starting with the first Monday as the first day of the first week. |`{{ timestamp｜date "%W" }} => "16" `|
|%w |Day of the week (0 - 6, with Sunday being 0). |`{{ timestamp｜date "%w" }} => "2" `|
|%x |Preferred representation for the date alone, no time. (mm/dd/yy). |`{{ timestamp｜date "%x" }} => "04/22/14" `|
|%X |Preferred representation for the time. (hh:mm:ss). |`{{ timestamp｜date "%X" }} => "13:17:24" `|
|%y |Year without a century (00.99). |`{{ timestamp｜date "%y" }} => "14" `|
|%Y |Year with a century. |`{{ timestamp｜date "%Y" }} => "2014" `|




<p align="right"><small><a href="#filter-list">Back Top</a></small></p>

#### get

Get a property inside an Object

```javascript
user =  {
    contact: {
        tel: "187xxxx0001"
    }
}
 
{{ user | get('contact.tel') }} => "187xxxx0001"
```

## License

MIT
