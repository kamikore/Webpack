
exports.common = "commonJs  module"

exports.fun = () => {console.log("commonJs module")}

let num1 = {num : 1}
exports.num1 = num1;

exports.add1 = () => {
    num1.num++
    console.log(num1)
}

//module.exports = {
//    name: "commonJs",
//}