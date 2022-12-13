const echo = (args, print) => {
    print(args.join(' '));
};

const pwd = (args, print) => {
    print(__dirname.split('\\').at(-1));
};

const date = (args, print) => {
    print(Date());
};

module.exports = {
    echo,
    pwd,
    date,
};