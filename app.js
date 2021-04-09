
//se instalo yargs y colors 
//tambien se instalo nodemon de forma de desarrollo | npm install nodemon --save-dev

const { crearArchivo } = require('./helper/multiplicar')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base debe ser numero'
        }
        return true
    })
    .argv


console.clear()

/* esto es para leer el tercer argumento como base /NO ADECUADO
const [, , arg3 = 'base=5'] = process.argv
const [, base = 5] = arg3.split('=')
console.log(base)
*/

crearArchivo(argv.b, argv.l).then(archivo => {
    console.log(`el archivo ${archivo} ha sido creado`)
}).catch(err => {
    console.log(`hubo un error ${err}`)
})

console.log('base:yarg', argv.base)