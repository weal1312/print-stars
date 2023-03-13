import { program  } from 'commander';
import { Diamond } from './lib/diamond.js';
import { Triangle } from './lib/triangle.js';

interface Option {
  type: keyof typeof shape,
  num: number | string
}

const shape = {
  diamond: Diamond,
  triangle: Triangle
}

program
  .requiredOption('-t --type <diamond|triangle>', 'type of shape', 'triangle')
  .requiredOption('-n --num <number>', 'number of layers', '3')
  .parse();

const { type, num } = program.opts<Option>();
new shape[type](+num).print();
