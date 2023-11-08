const path = require('node:path')

// unir rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/miduy-secret-files/password.txt')
console.log(base)


const filename = path.basename('/tmp/miduy-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)