let list = [
'divide',
  'minus',
  'plus',
  'multiply',
  'mod',
  'or',
  'xor',
  'and',
  'not',
  'abs',
  'acos',
  'asin',
  'atan',
  'atan2',
  'ceil',
  'cos',
  'exp',
  'floor',
  'log',
  'pow',
  'round',
  'sin',
  'sqrt',
  'tan',
  'sum',
  'mean'
]

let str = list.map(item => {
    return `- [${item}](http://underscorejs.org/#${item})`;
}).join('\n')

console.log(str);