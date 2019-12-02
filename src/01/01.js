const fs = require('fs');
const { EOL } = require('os');

module.exports.calculateModuleFuel = (mass) => Math.floor(mass / 3) - 2;

module.exports.calculateShipFuel = (file) => {
  const masses = fs.readFileSync(file).toString().split(EOL);

  return masses.map((mass) => this.calculateModuleFuel(parseInt(mass, 10))).reduce((acc, mass) => acc + mass);
};
