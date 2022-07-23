/*

1. Criar um algorítimo que retorne o fatorial de um número.

- Criar uma função que recebe um número
- Se o número for 1, retornar 1
- Caso contrário, multiplicar o número pelo fatorial do número - 1

*/

function factorial(number) {
  if (number == 1) return 1;

  return number * factorial(number - 1);
}

// console.log(factorial(10));

/*

2. Criar um algorítimo que retorna uma palavra ao contrário.

- Criar uma função que recebe uma palavra
- Criar uma string vazia
- Fazer um loop que percorra a palavra mas com o índice invertido
- Adicionar o caractere ao final da string
- Retornar a string

*/

function reverseString(string) {
  let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

// console.log(reverseString('Hello World'));

/*

3. Criar dois algorítimos que retornam a maior e a menor palavra de um array.

Algorítimo 1:

- Criar uma função que recebe um array de palavras
- Criar uma string vazia
- Fazer um loop que percorra o array
- Se a palavra atual for maior que a maior palavra, atualizar a maior palavra
- Retornar a maior palavra.

Algorítimo 2:

- Criar uma função que recebe um array de palavras
- Criar uma string vazia
- Fazer um loop que percorra o array
- Se a palavra atual for menor que a menor palavra, atualizar a menor palavra
- Retornar a menor palavra.

*/

function getLargestWord(array) {
  let largestWord = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > largestWord.length) {
      largestWord = array[i];
    }
  }

  return largestWord;
}

function getSmallestWord(array) {
  let smallestWord = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i].length < smallestWord.length || smallestWord.length == 0) {
      smallestWord = array[i];
    }
  }

  return smallestWord;
}

// console.log(getLargestWord(['Hello', 'World', 'in', 'a', 'frame']));
// console.log(getSmallestWord(['Hello', 'World', 'in', 'a', 'frame']));

/*

4. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

- Criar uma função que recebe um número
- Fazer um loop que percorra o número até o número -1
- Se o número for divisível por um número que não seja 1 ou ele mesmo, retornar -1
- Caso contrário, retornar o número

*/

function isPrime(number) {
  for (let i = number - 1; i > 1; i--) {
    if (number % i == 0) return false;
  }

  return true;
}

function getLargestPrimeNumber(number) {
  for (let i = number; i > 0; i--) {
    if (isPrime(i)) return i;
  }

  return -1;
}
