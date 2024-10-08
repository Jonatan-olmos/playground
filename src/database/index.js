const { readFileSync, writeFileSync } = require('fs');

module.exports = {
    leerJSON: (filename) => {
        return JSON.parse(readFileSync(`./src/database/${filename}.json`, 'utf-8'))

    },
    escribirJSON: (data, filename) => {
        writeFileSync(`./src/database/${filename}.json`, JSON.stringify(data, null, 3), 'utf-8')
        null
    },


}