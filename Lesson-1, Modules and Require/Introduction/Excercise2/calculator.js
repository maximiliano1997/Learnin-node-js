const calculador = require('./operations')
const { multiplication, division } = require('./operations')

let addition = calculador.addition(10, 10)
let subtraction = calculador.subtraction(11, 10)
let multiplications = multiplication(11, 10)
let divisions = division(20, 2)

console.log(`

${addition}
${subtraction}
${multiplications}
${divisions}

`)