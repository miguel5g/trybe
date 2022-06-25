/**
 * @param {string} original
 * @returns {string}
 */
function castToEmail(original) {
  return original.toLowerCase().replace(/\s/g, '_').replace(/\W/g, '');
}

function createUser(name) {
  return {
    name,
    email: `${castToEmail(name)}@merakilabs.com`,
  };
}

function newEmployees(doEmployer) {
  const employees = {
    id1: doEmployer('Pedro Guerra'),
    id2: doEmployer('Luiza Drumond'),
    id3: doEmployer('Carla Paiva'),
  };

  return employees;
}

// console.log(newEmployees(createUser));

function verifyNumbers(numberOne, numberTwo) {
  return numberOne === numberTwo;
}

function draw(userNumber, verifyFunc) {
  const validNumber = Math.floor(Math.random() * 5) + 1;

  return verifyFunc(userNumber, validNumber);
}

// console.log(draw(1, verifyNumbers));

function checkAnswer(template, answers) {
  return template.map((value, index) => answers[index] === value).filter((value) => value).length;
}

function hof(template, answers, verify) {
  return verify(template, answers);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));
