
//se instalo yargs y colors 
//tambien se instalo nodemon de forma de desarrollo | npm install nodemon --save-dev

const { crearArchivo } = require('./helper/multiplicar')

const argv = require('yargs').argv


console.clear()

/* esto es para leer el tercer argumento como base /NO ADECUADO
const [, , arg3 = 'base=5'] = process.argv
const [, base = 5] = arg3.split('=')
console.log(base)
*/

// crearArchivo(4).then(archivo => {
//     console.log(`el archivo ${archivo} ha sido creado`)
// }).catch(err => {
//     console.log(`hubo un error ${err}`)
// })

console.log(process.argv)
console.log('base:yarg', argv.base)