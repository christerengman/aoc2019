const { expect } = require('chai');
const rewire = require('rewire');

const day02 = rewire('../src/02/02');

describe('Day 02', () => {
  describe('#executeIntcode', () => {
    let executeIntcode;

    before(() => {
      executeIntcode = day02.__get__('executeIntcode');
    });

    context('with example data', () => {
      /* eslint-disable mocha/no-setup-in-describe */
      const examples = [
        {
          input: [1, 0, 0, 0, 99],
          noun: 0,
          verb: 0,
          output: [2, 0, 0, 0, 99],
        },
        {
          input: [2, 3, 0, 3, 99],
          noun: 3,
          verb: 0,
          output: [2, 3, 0, 6, 99],
        },
        {
          input: [2, 4, 4, 5, 99, 0],
          noun: 4,
          verb: 4,
          output: [2, 4, 4, 5, 99, 9801],
        },
        {
          input: [1, 1, 1, 4, 99, 5, 6, 0, 99],
          noun: 1,
          verb: 1,
          output: [30, 1, 1, 4, 2, 5, 6, 0, 99],
        },
      ];

      examples.forEach(({ input, noun, verb, output }) => {
        context(`given ${input}`, () => {
          it(`should return ${output}`, () => {
            const res = executeIntcode(input, noun, verb);
            expect(res).to.eql(output);
          });
        });
      });
      /* eslint-enable mocha/no-setup-in-describe */
    });
  });
});
