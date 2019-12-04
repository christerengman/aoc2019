const { expect } = require('chai');
const rewire = require('rewire');

const day01 = rewire('../src/01/01');

describe('Day 01', () => {
  describe('#calculateModuleFuel', () => {
    let calculateModuleFuel;

    before(() => {
      calculateModuleFuel = day01.__get__('calculateModuleFuel');
    });

    context('with example data', () => {
      /* eslint-disable mocha/no-setup-in-describe */
      const examples = [
        {
          mass: 12,
          fuel: 2,
        },
        {
          mass: 14,
          fuel: 2,
        },
        {
          mass: 1969,
          fuel: 654,
        },
        {
          mass: 100756,
          fuel: 33583,
        },
      ];

      examples.forEach((data) => {
        context(`given mass ${data.mass}`, () => {
          it(`should return ${data.fuel}`, () => {
            const res = calculateModuleFuel(data.mass);
            expect(res).to.eq(data.fuel);
          });
        });
      });
      /* eslint-enable mocha/no-setup-in-describe */
    });
  });

  describe('#calculateModuleFuelRecursive', () => {
    let calculateModuleFuelRecursive;

    before(() => {
      calculateModuleFuelRecursive = day01.__get__('calculateModuleFuelRecursive');
    });
    context('with example data', () => {
      /* eslint-disable mocha/no-setup-in-describe */
      const examples = [
        {
          mass: 14,
          fuel: 2,
        },
        {
          mass: 1969,
          fuel: 966,
        },
        {
          mass: 100756,
          fuel: 50346,
        },
      ];

      examples.forEach((data) => {
        context(`given mass ${data.mass}`, () => {
          it(`should return ${data.fuel}`, () => {
            const res = calculateModuleFuelRecursive(data.mass);
            expect(res).to.eq(data.fuel);
          });
        });
      });
      /* eslint-enable mocha/no-setup-in-describe */
    });
  });
});
