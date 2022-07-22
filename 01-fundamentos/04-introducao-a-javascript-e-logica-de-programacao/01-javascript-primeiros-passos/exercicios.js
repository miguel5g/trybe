function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 1. */

// const a = randomNumber(1, 10);
// const b = randomNumber(1, 10);

// console.log(`${a} + ${b} = ${a + b}`);
// console.log(`${a} - ${b} = ${a - b}`);
// console.log(`${a} * ${b} = ${a * b}`);
// console.log(`${a} / ${b} = ${a / b}`);
// console.log(`${a} % ${b} = ${a % b}`);
// console.log(`${a} ** ${b} = ${a ** b}`);

/* 2. */

// const a = randomNumber(1, 10);
// const b = randomNumber(1, 10);

// if (a > b) {
//   console.log(`${a} é maior que ${b}`);
// } else if (a < b) {
//   console.log(`${a} é menor que ${b}`);
// } else {
//   console.log(`${a} é igual a ${b}`);
// }

/* 3. */

// const a = randomNumber(1, 10);
// const b = randomNumber(1, 10);
// const c = randomNumber(1, 10);

// if (a > b && a > c) {
//   console.log(`${a} é o maior`);
// } else if (b > a && b > c) {
//   console.log(`${b} é o maior`);
// } else {
//   console.log(`${c} é o maior`);
// }

/* 4. */

// const a = randomNumber(-10, 10);

// if (a > 0) {
//   console.log(`${a} é positivo`);
// } else {
//   console.log(`${a} é negativo`);
// }

/* 5. */

// const a = randomNumber(55, 60);
// const b = randomNumber(55, 60);
// const c = randomNumber(55, 60);

// if (a + b + c === 180) {
//   console.log('É um triângulo');
// } else {
//   console.log('Não é um triângulo');
// }

/* 6. */

// const peca = 'Torre';

// switch (peca.toLowerCase()) {
//   case 'peão':
//     console.log('Anda uma casa a frente');
//     break;

//   case 'bispo':
//     console.log('Anda em diagonais');
//     break;

//   case 'cavalo':
//     console.log('Anda em L para cada diagonal');
//     break;

//   case 'rainha':
//     console.log('Anda igual o Bispo e a Torre');
//     break;

//   case 'rei':
//     console.log('Anda uma casa em uma direção');
//     break;

//   case 'torre':
//     console.log('Anda em cruz');
//     break;

//   default:
//     console.log('Peça inválida');
//     break;
// }

/* 7. */

// const a = randomNumber(1, 100);
// let b;

// if (a >= 90) {
//   b = 'A';
// } else if (a >= 80) {
//   b = 'B';
// } else if (a >= 70) {
//   b = 'C';
// } else if (a >= 60) {
//   b = 'D';
// } else if (a >= 50) {
//   b = 'E';
// } else {
//   b = 'F';
// }

// if (a > 100 || a < 0) {
//   b = 'Nota inválida';
// }

// console.log(`${a} é ${b}`);

/* 8. */

// const a = randomNumber(1, 100);
// const b = randomNumber(1, 100);
// const c = randomNumber(1, 100);

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log('Algum número é par');
// }

/* 9. */

// const a = randomNumber(1, 100);
// const b = randomNumber(1, 100);
// const c = randomNumber(1, 100);

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   console.log('Algum número é impar');
// }

/* 10. */

// const a = randomNumber(50, 70);
// const b = randomNumber(30, 100);

// const c = b - a;

// console.log('Mil vendas dará ', c * 1000);

/* 11. */

// let salario = 1500.1;
// let inss = 0;
// let ir = 0;

// if (salario <= 1556.94) {
//   inss = salario * 0.08;
// } else if (salario <= 2594.92) {
//   inss = salario * 0.09;
// } else if (salario <= 5189.82) {
//   inss = salario * 0.11;
// } else {
//   inss = 570.88;
// }

// salario -= inss;

// if (salario <= 1903.98) {
//   ir = 0;
// } else if (salario <= 2826.65) {
//   ir = salario * 0.075 - 142.8;
// } else if (salario <= 3751.05) {
//   ir = salario * 0.15 - 354.8;
// } else if (salario <= 4664.68) {
//   ir = salario * 0.225 - 636.13;
// } else {
//   ir = salario * 0.275 - 869.36;
// }

// salario -= ir;

// console.log(`Salário: ${salario}`);
