const fs = require('fs')

const echo = (args, print) => {
    print(args.join(' '));
};

const pwd = (args, print) => {
    print(__dirname.split('\\').at(-1));
};

const date = (args, print) => {
    print(Date());
};

const ls = (args, print) => {
    fs.readdir('.', (err, files) => {
        if (err) throw err;
        // files.forEach((file) => process.stdout.write(file + '/n'));
        print(files.join('/n'))
    });
};

module.exports = {
    echo,
    pwd,
    date,
    ls,
};