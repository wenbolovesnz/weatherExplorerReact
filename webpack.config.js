const path = require('path');

console.log(__dirname);

module.exports = {
    entry: './index.js',
    devtool:'sourcemap',
    output: {
        path: path.resolve(__dirname),    
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }        
        ]
  }
};