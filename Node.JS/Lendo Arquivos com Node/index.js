/*      ### Módulo de File System ###    */

let {readFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
})
