let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1. */

for (let number of numbers) {
  console.log(number);
}

/* 2. */

let total = 0;

for (const number of numbers) {
  total += number;
}

console.log('Total:', total);

/* 3. */

const average = total / numbers.length;

console.log('Média:', average);

/* 4. */

if (average > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

/* 5. */

let bigger = 0;

for (const number of numbers) {
  if (number > bigger) {
    bigger = number;
  }
}

console.log('Maior número:', bigger);

/* 6. */

let odd = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    odd += 1;
  }
}

if (odd > 0) {
  console.log(odd, 'números ímpar(es)');
} else {
  console.log('Nenhum número ímpar');
}

/* 7. */

let smaller = null;

for (const number of numbers) {
  if (smaller === null || number < smaller) {
    smaller = number;
  }
}

console.log('Menor número:', smaller);

/* 8. */
const bigArray = [];

for (let index = 1; index <= 25; index++) {
  bigArray.push(index);
}

/* 9. */

for (const number of bigArray) {
  console.log(number % 2);
}
