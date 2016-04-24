var fs = require('fs'),
    rollup = require('rollup'),
    uglify = require('uglify-js'),
    version = require('../package.json').version;

var banner =
    '/**\n' +
    ' * vue-filter.js v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' wy-ei\n' +
    ' * MIT License.\n' +
    ' */';

rollup.rollup({
    entry: 'src/index.js',
    sourceMap: true
}).then(function(bundle) {
    var code = bundle.generate({
        format: 'iife',
        banner: banner,
        indent: '    ',
        globals: {
            vue: 'Vue'
        }
    }).code;
    fs.writeFileSync('dist/vue-filter.js', code);
    var minified = uglify.minify(code, {
        fromString: true
    }).code;
    minified = banner + '\n' + minified;
    fs.writeFileSync('dist/vue-filter.min.js', minified);
    console.log('done!');
});
