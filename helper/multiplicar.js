
const fs = require('fs')
const colors = require('colors')

const crearArchivo = (base = 1, lista = false, hasta = 11) => {
    return new Promise((resolve, reject) => {
        let salida = ''
        let consola = ''
        for (let index = 1; index < hasta + 1; index++) {
            salida += `${colors.green(base)} ${colors.yellow('x')} ${colors.green(index)} ${colors.america('=')} ${colors.magenta(base * index)} \n`
            consola += `${base} x ${index} = ${base * index} \n`
        }
        if (lista) {
            console.log('==========================='.green)
            console.log(`      Tabla del ${base}    `)
            console.log('==========================='.green)
            console.log(salida)
        }

        fs.writeFile(`tabla-${base}.txt`, consola, (err) => {
            if (err) throw reject(err)
            resolve(`tabla-${base}.txt`)
        })
    })
}
const crearArchivo2 = async (base = 1) => {
    try {
        let salida = ''
        for (let index = 1; index < 11; index++) {
            salida += `${base} x ${index} = ${base * index} \n`
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error

    }



}
module.exports = {
    crearArchivo,
    crearArchivo2
}