const webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=dist/[name].[ext]?[hash]'
        }]
    }
};
