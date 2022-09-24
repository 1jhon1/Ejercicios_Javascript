import {suma, multiplica} from './controller/operaciones.js';
import chalk from 'chalk';

const sum = suma(1 , 2);
console.log(sum);

const mult = multiplica(4 , 5);
console.log(mult);

const log = console.log;
log(chalk.green('Hello') + ' World' + chalk.red('!'));


