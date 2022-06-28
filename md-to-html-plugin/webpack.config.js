const {
    resolve
} = require('path')
const {
    readFileSync
} = require('fs')

const MdToHtmlPlugin = require('./plugins/md-to-html-plugin') // 自己插件的文件路径


module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'app.js',
        path: resolve(__dirname, 'dist')
    },
    module: {

    },
    plugins: [
        new MdToHtmlPlugin({ //实例化
            template: './test.md',
            filename: 'index.html'
        }),

    ],

}