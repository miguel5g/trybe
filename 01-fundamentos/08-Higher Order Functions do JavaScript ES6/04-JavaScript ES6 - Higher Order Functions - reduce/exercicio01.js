const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(arr) {
  return arr.reduce((flat, values) => [...flat, ...values], []);
}

assert.deepEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);
