const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path: path.join(__dirname, "dist"),
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                options:{
                    "presets":[
                        "@babel/preset-react",
                        "@babel/preset-env"
                    ],
                    "plugins":[
                        "@babel/proposal-class-properties",
                        "@babel/syntax-dynamic-import"
                    ]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(m4a)$/,
                loader:'file-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template :'public/index.html',
            filename:'./index.html',
            favicon   : 'public/favicon.ico'
        }),
        new CleanWebpackPlugin()
    ]
}