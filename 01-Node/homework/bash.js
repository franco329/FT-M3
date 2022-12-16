const commands = require('./commands')
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  // const cmd = data.toString().trim() // modificación para hacer el comando echo;
  const input = data.toString().trim().split(' ');
  const cmd = input.shift();
  const args = input.join(' ')


  // if (cmd === 'pwd') // ejecutar pwd => imprime el directorio actual
  // if (cmd === 'date') // ejecutar date => imprime la fecha

  // switch (cmd) {
  //   case 'pwd':
  //     commands.pwd();
  //     break;
  //   case 'date':
  //     commands.date();
  //     break;
  
  //   default:
  //     // imprimir un mensaje de error;
  // }
  // **********************************************************************
  // De ésta forma me ahorro el if y el switch, ejecutando commands(objeto), propiedad [cmd]
  // if (commands.hasOwnProperty(cmd)) {
  //   commands[cmd]();
  // } else {
  //   process.stdout.write('El comando no existe');
  // }
  // **********************************************************************
  // Utilizo operador ternario de la siguiente manera:
  commands[cmd] // si existe la propiedad => es una fn(), o sea true - si NO, es undefined, osea false
  ? commands[cmd](args) 
  : process.stdout.write('El comando no existe');
});