const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin');
const env = process.env.NODE_ENV || 'development';
console.log('NODE_ENV: ', env)
config = {
    entry: [
        "react-hot-loader/patch",
        './src/index.js'
    ],

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ]
}

if(env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    );
}

module.exports = config
