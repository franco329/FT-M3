const fs = require ('fs');
const request = require ('request')

const write = (value) => {
    process.stdout.write(value + '\n');
    process.stdout.write('prompt > ');
}

module.exports = {
    pwd: () => {
        // resumo esto en:
        // const dirname = process.cwd().split('\\').at(-1);
        // write(dirname);
        write(process.cwd().split('\\').at(-1))
    },
    date: () => { write(Date())
    },
    ls: () => {
        fs.readdir('.', (err, files) => {
            const text = files.join('\n');
            write(text)
        })
    },
    echo: (text) => {
        write(text);
    },
    cat: (filename) => {
        // muestra todo el contenido de un archivo
        fs.readFile('./' + filename, 'utf-8', (err, file) => {
            write(file);
        })
    },
    head: (filename) => {
        // muestra las primeras lineas de un archivo, no todo el archivo
        fs.readFile('./' + filename, 'utf-8', (err, file) => {
            write(file.split('\n').slice(0, 5).join('\n'));
        })
    },
    tail: (filename) =>{
        // muestra las últimas líneas de un archivo
        fs.readFile('./' + filename, 'utf-8', (err, file) => {
            write(file.split('\n').slice(-5).join('\n')); //el -5 es para que imprima las ultimas 5 lineas
        })
    },
    curl: (url) => {
        request(url, (err, response, body) => {
            write(body);
        })
    }
}
