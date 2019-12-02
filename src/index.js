const path = require('path');
const day01 = require('./01/01');

const absolutePath = path.resolve('./src/01/input.txt');
const fuel = day01.calculateShipFuel(absolutePath);
console.log(`Day 01: ${fuel}`);
