let path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        'vue-filter': './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        library: 'vue-filter',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};