const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
  return array.sort((a, b) => a - b);
};

console.log(sortArray(oddsAndEvens)); // será necessário alterar essa linha 😉