// import {Configuration} from 'webpack'

/**
 * @type {Configuration}
 */

// 所有的构建工具都是基于 node.js 平台，运行模块化默认 common.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    mode:'none',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        // 关闭ES6 模块化，当前环境下可加可不加
                        esModule: false,
                        //在webpack4.x必须显式的指定fallback备用方法，这里指定为file-loader
                        // fallback: require.resolve('file-loader'),
                        // encoding: "base64",
                        name: 'asstes/[name].[ext]'
                    },

                }],
                // 资源模块类型设置为 javascript/auto
                type: 'javascript/auto'
            },

        ]
    },
    plugins: [
        // 如果有大量的设置，推荐模板
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // }),
        new HtmlWebpackPlugin({
            title: "Webpack 打包",
            meta:{
                viewport: "width=device-width"
            }
        }),
        new MiniCssExtractPlugin()
    ],

}


module.exports = config