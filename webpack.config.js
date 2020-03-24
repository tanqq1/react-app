const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].[hash].bundle.js",
        path: path.join(__dirname, "dist"),
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
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
                test: /\.(png|jpg|gif|ico)$/,
                exclude: /node_modules/,
                loader: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
            // favicon: path.resolve.apply(path,[__dirname, 'public/favicon.ico','../..'])
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        allowedHosts:['www.baidu.com'],//添加白名单服务，允许一些开发服务器访问
        port: '3333',
        contentBase:path.join(__dirname,'public'),
        publicPath:'/',
        watchContentBase: true,
        hot: true
    }
}