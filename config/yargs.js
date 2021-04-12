const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la información listada de la tabla'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limite de multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base debe ser numero'
        }
        return true
    })
    .argv

module.exports = {
    argv
}