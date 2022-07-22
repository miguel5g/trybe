const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const expectedResult = 20;

function containsA() {
  return names
    .join('')
    .split('')
    .reduce((length, char) => (char.match(/a/i) ? length + 1 : length), 0);
}

assert.equal(containsA(), expectedResult);
