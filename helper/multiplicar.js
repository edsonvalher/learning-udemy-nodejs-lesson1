
const fs = require('fs')

const crearArchivo = (base = 1, lista = false) => {
    return new Promise((resolve, reject) => {
        let salida = ''
        for (let index = 1; index < 11; index++) {
            salida += `${base} x ${index} = ${base * index} \n`
        }
        if (lista) {
            console.log(salida)
        }

        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
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