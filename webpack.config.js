/**
 * Created by panca on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
require("babel-polyfill")
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/index.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8001
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },

            {   test: /\.less$/,
                //exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader!less-loader' 
            },
                 //处理css文件，把less编译成css

            {   test: /\.css$/,
            //exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader!less-loader'
            },
                     //处理css文件，把less编译成css

                     {   test: /\.scss$/,
                        //exclude: /(node_modules|bower_components)/,
                        loader: 'style-loader!css-loader!sass-loader' },
                         //处理css文件，把less编译成css

            {   test: /\.(png|jpg)$/, 
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=8192'
            }  // 处理图片，大小低于8k的文件编译为base64
            
          ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.tpl.html',
            //filename: '../build/index.html',
            // 其他配置，如 favicon
            //favicon: './app/favicon.png'
          }),

        // 打开浏览器
        // new OpenBrowserPlugin({
        //   url: 'http://localhost:8080'
        // }),
    ]
};