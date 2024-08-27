// // import chalk from "chalk";

// // console.log(chalk.blue('Hello, world!'));
// // console.log(chalk.red.bold('This is an error message.'));
// // console.log(chalk.green.underline('This is a success message.'));




// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'a.txt');

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();
