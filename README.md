# vue-filter

[![](https://travis-ci.org/wy-ei/vue-filter.svg)](https://travis-ci.org/wy-ei/vue-filter)

A plugin for Vue.js. Which include many useful **custom filters** can enhance vue filter system.

## Installation

### NPM

```
npm install vue-filter
```

### CommonJS

```javascript
var Vue = require('Vue');
var VueFilter = require('vue-filter');
Vue.use(VueFilter);
```

### AMD
```javascript
require(['vue','vue-filter'],function(Vue,VueFilter){
	Vue.use(VueFilter);
});
```

### Direct include

you can include it directly with a `<script>` tag. It will install itself automatically.

```html
<script src="vue.js"></script>
<script src="vue-filter.js"></script>
```

## Usage

It's very easy to use.

**Example**:

+ append postfix for a string:

```html
<img src={{ 'sky' | append '.jpg' }} />
<!-- get -->
<img src='sky.jpg' />
```

+ get first element in an array or first charactor in a string:

```html
<p>{{ ['a','b','c'] | first }}</p>
<!-- get -->
<p>a</p>
```

**See filter list below for more filters**

## Filters List

### Collection Filters

+ [first](#first)
+ [last](#last)
+ [join](#join)
+ [size](#size)
+ [at](#at)
+ [reverse](#reverse)
+ [concat](#concat)
+ [map](#map)
+ [random](#random)
+ [range](#range)
+ [contains](#contains)

### Math Filters

+ [abs](#math-method-filters)
+ [acos](#math-method-filters)
+ [asin](#math-method-filters)
+ [atan](#math-method-filters)
+ [atan2](#math-method-filters)
+ [ceil](#math-method-filters)
+ [cos](#math-method-filters)
+ [exp](#math-method-filters)
+ [floor](#math-method-filters)
+ [log](#math-method-filters)
+ [pow](#math-method-filters)
+ [round](#math-method-filters)
+ [sin](#math-method-filters)
+ [sqrt](#math-method-filters)
+ [tan](#math-method-filters)
+ [sum](#sum)
+ [mean](#mean)
+ [min](#min)
+ [max](#max)
+ [plus](#plus)
+ [minis](#minus)
+ [multiply](#multiply)
+ [divide](#divide)
+ [mod](#mod)

### String Filters

+ [append](#append)
+ [prepend](#prepend)
+ [remove](#remove)
+ [camelcase](#camelcase)
+ [truncate](#truncate)
+ [split](#split)
+ [trim](#trim)
+ [test](#test)
+ [leftPad](#leftpad)
+ [rightPad](#rightpad)
+ [repeat](#repeat)


### Other Filters

+ [date](#date)
+ [defaults](#defaults)

**see [Document](#document) below to learn how to use those filters**

## Document

### Collection Filters

---

#### first

Returns the first element of an array,or first charactor of a string.

```
{{ ['a','b','c'] | first }} => 'a'
{{ 'hello' | first }} => 'h'
```

#### last

Returns the last element of an array,or last charactor of a string.

```
{{ ['a','b','c'] | last }} => 'c'
{{ 'hello' | last }} => 'o'
```

#### join

Joins the elements of an array with the character passed as the parameter.
The result is a single string.

```
{{ ['a','b','c'] | join '-' }} => 'a-b-c'
```

#### size

Returns the size of a string or an array.

```
{{ ['a','b','c'] | size }} => 3
{{ 'hello' | size }} => 5
```

#### at

Returns the item at the specified index location in an array or a string.

```
{{ ['a','b','c'] | at 1 }} => 'b'
{{ 'hello' | at 1 }} => 'e'
```

#### reverse

reverse an array or a string

```
{{ 'abc' | reverse }} => 'cba'
{{ [1,2,3] | reverse }} => [3,2,1]
```

#### concat

Concatenates an array into another one.


```  
{{ [1,2,3] | concat [4,5,6] }} => [1,2,3,4,5,6]
```

#### map

returns a new collection of the results of each expression execution.

```javascript
new Vue({
  ...
  methods:{
    increase:function(val){return val+1;}
  }
});
```

```
{{ [1,2,3] | map increase }} => [2,3,4]
```

#### random

get a random value from a collection

```
{{ [1,2,3,4] | random }} => 1 or 2 or 3 or 4
```

#### range

Return a new collection from a given length

```
{{ [] | range 4 }} => [0,1,2,3]
```

#### contains

Checks if given expression or value is present in the collection

```
{{ [2,3,4] | contains 3 }} => true;
```

### Math Filters

---

#### Math method filters

abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,pow,round,sin,sqrt,tan

**Notice:** random filter use to get a random value from a collection

```
{{ -1.2 | abs }}  => 1.2
{{ 1 | acos }}  => 0
{{ 1.3 | ceil }} => 2
{{ 3 | pow 2 }} => 9  i.e: Math.pow(3,2)
```

#### sum

Get sum of all values in an array.

```
{{ [1,2,3] | sum }} => 6
you can give an option argument as initial value
{{ [1,2,3] | sum 10 }} = 16
```

#### mean

return mean value of a array

```
{{ [1,2,3,4] | mean }} => 2.5
```

#### min

return minimum value in an array.It will compare two item by a certain key
if key provide.

```
{{ [13,22,3,24 ] | min }} => 3
{{ list | min 'age' }} => {name:'ron',age:12}
list:[
	{name:'james',age:24},
	{name:'ron',age:12}
]
```

#### max

return maximum value in an array.It will compare two item by a certain key
if key provide.

#### plus

Adds a number to an output.

```
{{ 10 | plus 2 }} => 12
```

#### minus

Subtracts a number from an output.

```
{{ 12 | minus 2 }} => 10
```

#### multiply

Multiplies an output by a number.

```
{{ 10 | multiply 2 }} => 20
```

#### divide

Divides an output by a number

```
{{ 10 | divide 4 }} => 2.5
```

#### mod

Divides an output by a number and returns the remainder.

```
{{ 10 | mod 3 }} => 1
```

### String Filters

---

#### append

Appends characters to a string.

```
{{ 'sky' | append '.jpg' }} => 'sky.jpg'
```

#### prepend

Prepends characters to a string.

```
{{ 'world' | prepend 'hello ' }} => 'hello world'
```

#### remove

Removes all occurrences of a substring from a string.

```
{{ 'Hello JavaScript' | remove 'Hello' }} => ' JavaScript'
```

#### camelcase

Converts a string into CamelCase.

```
{{ some_else | camelcase }} => SomeElse
{{ some-else | camelcase }} => SomeElse
```

#### truncate

truncate text to a specified length.

```
{{ 'this is a big city!' | truncate 10 '...' }} => this is...
```

#### split

The split filter takes on a substring as a parameter.The substring is used as a delimiter to divide a string into an array.

```
{{ 'a-b-c-d' | split '-' }} => [a,b,c,d]
```

#### trim

Strips tabs, spaces, and newlines (all whitespace) from the left or right or both side of a string.which depends on second argument. if it is 'r' will only trim right side,if it is 'l' will only trim left side otherwise trim both left and right side.

```
{{ '   some spaces   ' | trim }} => 'some spaces'
{{ '   some spaces   ' | trim 'r' }} => '   some spaces'
{{ '   some spaces   ' | trim 'l' }} => 'some spaces   '
```

#### test

test if a string match a pattern

```
{{ "http://vuejs.org" | test /^http/ }} => true
```

#### leftPad

pad a string on left

```
{{ 'abc' | leftPad 5 '*' }} => '**abc'
```

#### rightPad

pad a string on right

```
{{ 'abc' | rightPad 5 '*' }} => 'abc**'
```

#### repeat

repeat a string n times

```
{{ 'abc' | repeat 3 }} => 'abcabcabc'
{{ 'abc' | repeat '3' }} => 'abcabcabc'
{{ 'abc' | repeat 0 }} => ''
{{ 'abc' | repeat }} => ''
```

### Other Filters

---

### date

Converts a timestamp into another date format.

```html
{{ Date.now() | date '%T' }}  => '13:34:36'
{{ 'Wed Jan 20 2016 13:34:36 GMT+0800' | date '%T' }} => '13:34:36'
{{ 1453268193752 | date '%Y-%m-%d' }} => '2016-01-20'
{{ new Date | date '%I:%M:%s %p' }} => '1:39:22 PM'
```

**more date parameters are listed below:**


| param | explanation | example |
|:--:|:--|:--|
|%a | Abbreviated weekday. |`{{ timestamp | date "%a" }} => "Sat" `|
|%A |Full weekday name. |`{{ timestamp | date "%A" }} => "Tuesday" `|
|%b |Abbreviated month name. |`{{ timestamp | date "%b" }} => "Jan" `|
|%B |Full month name |`{{ timestamp | date "%B" }} => "January" `|
|%c |Preferred local date and time representation |`{{ timestamp | date "%c" }} => "Tue Apr 22 11:16:09 2014" `|
|%d |Day of the month, zero-padded (01, 02, 03, etc.). |`{{ timestamp | date "%d" }} => "04" `|
%-d |Day of the month, not zero-padded (1,2,3, etc.). |`{{ timestamp | date "%-d" }} => "4" `|
|%D |Formats the date (dd/mm/yy). |`{{ timestamp | date "%D" }} => "04/22/14" `|
|%e |Day of the month, blank-padded ( 1, 2, 3, etc.). |`{{ timestamp | date "%e" }} => "3" `|
|%F |Returns the date in ISO 8601 format (yyyy-mm-dd). |`{{ timestamp | date "%F" }} => "2014-04-22" `|
|%H |Hour of the day, 24-hour clock (00 - 23). |`{{ timestamp | date "%H" }} => "15" `|
|%I |Hour of the day, 12-hour clock (1 - 12). |`{{ timestamp | date "%I" }} => "7" `|
|%j |Day of the year (001 - 366). |`{{ timestamp | date "%j" }} => "245" `|
|%k |Hour of the day, 24-hour clock (1 - 24). |`{{ timestamp | date "%k" }} => "14" `|
|%m |Month of the year (01 - 12). |`{{ timestamp | date "%m" }} => "04" `|
|%M |Minute of the hour (00 - 59). |`{{ timestamp | date "%M" }} => "53" `|
|%p |Meridian indicator (AM/PM). |`{{ timestamp | date "%p" }} => "PM" `|
|%r |12-hour time (%I:%M:%S %p) |`{{ timestamp | date "%r" }} => "03:20:07 PM" `|
|%R |24-hour time (%H:%M) |`{{ timestamp | date "%R" }} => "15:21" `|
|%T |24-hour time (%H:%M:%S) |`{{ timestamp | date "%T" }} => "15:22:13" `|
|%U |The number of the week in the current year, starting with the first Sunday as the first day of the first week. |`{{ timestamp | date "%U" }} => "16" `|
|%W |The number of the week in the current year, starting with the first Monday as the first day of the first week. |`{{ timestamp | date "%W" }} => "16" `|
|%w |Day of the week (0 - 6, with Sunday being 0). |`{{ timestamp | date "%w" }} => "2" `|
|%x |Preferred representation for the date alone, no time. (mm/dd/yy). |`{{ timestamp | date "%x" }} => "04/22/14" `|
|%X |Preferred representation for the time. (hh:mm:ss). |`{{ timestamp | date "%X" }} => "13:17:24" `|
|%y |Year without a century (00.99). |`{{ timestamp | date "%y" }} => "14" `|
|%Y |Year with a century. |`{{ timestamp | date "%Y" }} => "2014" `|

### defaults

Sets a default value for any variable with no assigned value.

The default value is returned if the variable resolves to null ,undefined or an empty string ''.A string containing whitespace characters and a number has value 0 will not resolve to the default value.

```html
{{ customer.name | defaults "customer" }}

<!--if customer.name is null or empty,will use "customer" instead-->
```

## License

MIT
