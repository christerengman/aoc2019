const fs = require('fs');
const path = require('path');


const executeIntcode = (code, noun, verb) => {
  const buf = [...code];
  buf[1] = noun;
  buf[2] = verb;
  for (let i = 0; i < buf.length; i += 4) {
    const op = buf[i];
    if (op === 99) {
      return buf;
    }
    const a = buf[buf[i + 1]];
    const b = buf[buf[i + 2]];
    const loc = buf[i + 3];
    switch (op) {
      case 1:
        buf[loc] = a + b;
        break;
      case 2:
        buf[loc] = a * b;
        break;
      default:
        break;
    }
  }
  return buf;
};

const parseFile = (file) => {
  const strings = fs.readFileSync(file).toString().split(',');
  return strings.map((s) => parseInt(s, 10));
};

const findOutput = (code, output) => {
  for (let noun = 0; noun < 99; noun += 1) {
    for (let verb = 0; verb < 99; verb += 1) {
      const [res] = executeIntcode(code, noun, verb);
      if (res === output) {
        return { noun, verb };
      }
    }
  }
  return {};
};

module.exports.run = () => {
  const code = parseFile(path.resolve('./src/02/input.txt'));
  const [res1] = executeIntcode(code, 12, 2);

  const { noun, verb } = findOutput(code, 19690720);
  const res2 = 100 * noun + verb;

  console.log(`Day 02: ${res1} / ${res2} `);
};
