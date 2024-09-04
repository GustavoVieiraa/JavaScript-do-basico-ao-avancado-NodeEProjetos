/*      ### Módulo de File System ###    */

let {readFile, writeFile} = require('fs');


readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
})

writeFile("arquivo.txt", "Texto injetado por writeFile", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!");
    }
})

