// 1 - Crie uma função que retorne a string 'Acordando!!';

function wakeUp() {
  return 'Acordando!!';
}

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';

function eatBreakfast() {
  return 'Bora tomar café!!';
}

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';

function goSleep() {
  return 'Partiu dormir!!';
}

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

function doingThings(action) {
  return action();
}

console.log(doingThings(wakeUp));
console.log(doingThings(eatBreakfast));
console.log(doingThings(goSleep));
