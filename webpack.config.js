const path = require('path');

const config = {
    // watch: true,
    // devtool: 'source-map',
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
};

if (process.env.NODE_ENV === 'development') {
    config.watch = true;
    config.devtool = './app/index.js';
}

module.exports = config;