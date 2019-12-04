const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

const calculateModuleFuel = (mass) => Math.floor(mass / 3) - 2;

const calculateShipFuel = (file) => {
  const masses = fs.readFileSync(file).toString().split(EOL);

  return masses.map((mass) => calculateModuleFuel(parseInt(mass, 10))).reduce((acc, mass) => acc + mass);
};

const calculateModuleFuelRecursive = (mass) => {
  const fuel = calculateModuleFuel(mass);
  const fuelmass = fuel;
  if (fuelmass < 0) {
    return 0;
  }

  return fuel + calculateModuleFuelRecursive(fuelmass);
};

const calculateShipFuelRecursive = (file) => {
  const masses = fs.readFileSync(file).toString().split(EOL);

  return masses.map((mass) => calculateModuleFuelRecursive(parseInt(mass, 10))).reduce((acc, mass) => acc + mass);
};

module.exports.run = () => {
  const fuel = calculateShipFuel(path.resolve('./src/01/input.txt'));
  const fuelRecursive = calculateShipFuelRecursive(path.resolve('./src/01/input.txt'));
  console.log(`Day 01: ${fuel} / ${fuelRecursive}`);
};
