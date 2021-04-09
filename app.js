
//se instalo yargs y colors 
//tambien se instalo nodemon de forma de desarrollo | npm install nodemon --save-dev

const { crearArchivo } = require('./helper/multiplicar')

const { argv } = require('./config/yargs')


console.clear()

/* esto es para leer el tercer argumento como base /NO ADECUADO
const [, , arg3 = 'base=5'] = process.argv
const [, base = 5] = arg3.split('=')
console.log(base)
node .\app.js  -b 2 -l
*/

crearArchivo(argv.b, argv.l).then(archivo => {
    console.log(`el archivo ${archivo} ha sido creado`)
}).catch(err => {
    console.log(`hubo un error ${err}`)
})

console.log('base:yarg', argv.base)