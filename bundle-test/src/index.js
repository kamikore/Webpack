
// import data from './data.json'
// import './index.css'

// var a = ()=>{
//     return 10;
// }

// console.log(data)
// console.log(a())


import createHeading from './heading.js'
import {funcB} from './esModule'
const {fun} = require("./common.js")

/* 
    测试 tree-shaking，production 模式下自动开启
    对于commonJS，无法shaking，只要引入了所有模块都引入，commonjs这种规范是运行时加载，若是分析文件是否导入导出有较大的不确定性
    ESModule 可以准确shaking
*/
// funcB()
fun()


const heading = createHeading()     
document.body.append(heading)


