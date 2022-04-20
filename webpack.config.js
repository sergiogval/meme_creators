const webpack = require('webpack');

module exports  = {
    context: _dirname,
    entry: {
        general: './src/js/general.js'
        memes: '.src/js/memes.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
};