
// import data from './data.json'
// import './index.css'

// var a = ()=>{
//     return 10;
// }

// console.log(data)
// console.log(a())


import createHeading from './heading.js'
const {fun,num1,add1} = require("./common.js")
import {funcB,num2,add2} from './esModule'



/* 
    测试 tree-shaking，production 模式下自动开启
    对于commonJS，无法shaking，只要引入了所有模块都引入，commonjs这种规范是运行时加载，若是分析文件是否导入导出有较大的不确定性
    ESModule 可以准确shaking
*/
// funcB()
// fun()

console.log(num1)
add1()
console.log(num1)       // 需要使用引用类型才能看到改变

// import引入的变量其实是对原本模块变量的一个链接引用，当原模块变量值改变的时候，我们引入的变量的值也会跟着改变
console.log(num2)        // 1
add2()
console.log(num2)        // 2，即使暴露的不是引用类型，也能拿到更新的数据




const heading = createHeading()     
document.body.append(heading)


