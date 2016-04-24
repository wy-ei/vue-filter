var fs = require('fs'),
    rollup = require('rollup');

rollup.rollup({
    entry: 'test/index.js'
}).then(function(bundle) {
    var code = bundle.generate().code;
    fs.writeFileSync('test/test.js', code);
    require('../test/test.js');
}, function(err) {
    console.log(err);
});
