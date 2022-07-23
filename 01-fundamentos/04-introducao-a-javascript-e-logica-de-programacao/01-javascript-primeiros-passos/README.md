# JavaScript - Primeiros passos

## O que é JavaScript?

JavaScript é uma linguagem de programação que permite ao desenvolvedor escrever códigos que são interpretados pelo navegador.

## O que é Node.js?

Node.js surgiu como uma solução para executar códigos JavaScript sem a necessidade de um navegador.

## O que é ECMAScript?

ECMAScript é um conjunto de normas para a padronização da linguagem JavaScript.

## Variáveis

Uma variável é um nome que pode ser usado para armazenar um valor.

Exemplo:

```js
let age = 19;
let name = 'Miguel';
```

_**OBS:**_ Não podemos iniciar um número como primeiro caractere de uma variável.

_**OBS:**_ Não pode haver espaços em branco entre o nome e o valor da variável.

_**Dica:**_ Para definir uma variável com mais de uma palavra, use o estilo camelCase.

Tipo de variáveis:

- **let**: Variável que pode ser alterada.
- **const**: Variável que não pode ser alterada.

## Tipos primitivos

Tipos primitivos são tipos de conteúdo que não podem ser armazenados em variáveis.

Existem dois tipos principais, de _referência_ e _valores_.

### Tipos de variáveis de valores:

- **string**: Todo tipo de caractere entre aspas duplas ou aspas simples.
- **number**: Números inteiros e reais.
- **boolean**: Verdadeiro ou falso.
- **null**: Valor nulo.
- **undefined**: Valor não definido.

```js
let movie = 'Avengers: Endgame'; // string literal
let year = 2019; // number literal
let isWatched = true; // boolean literal
let nullValue = null; // null literal
let undefinedValue; // undefined literal
```

### Tipos de variáveis de referência:

- **object**: Variáveis que armazenam um valor do tipo objeto.
- **array**: Variáveis que armazenam um valor do tipo array.
- **function**: Variáveis que armazenam um valor do tipo função.

```js
// object
let movie = {
  title: 'Avengers: Endgame',
  year: 2019,
  isWatched: true,
};

// array
let movies = [
  'Avengers: Endgame',
  'Avengers: Infinity War',
  'Avengers: Age of Ultron',
  'Avengers: The Avengers',
  'Avengers: The Initiative',
];
```

### Operador `typeof`

Ele retorna o tipo de uma variável.

Exemplo:

```js
let age = 19;
let name = 'Miguel';

console.log(typeof age); // number
console.log(typeof name); // string
```

## Operadores aritméticos

- **+**: Adição.
- **-**: Subtração.
- **\***: Multiplicação.
- **/**: Divisão.
- **%**: Resto da divisão.
- **\*\***: Exponenciação.
- **++**: Incremento.
- **--**: Decremento.

Exemplos:

```js
let age = 19;

console.log(age + 1); // 20
console.log(age - 1); // 18
console.log(age * 2); // 38
console.log(age / 2); // 9.5
console.log(age % 2); // 1
console.log(age ** 2); // 361
console.log(age++); // 20
console.log(age--); // 18
```

## Condicionais

- **if**: Executa uma sequência de instruções se a condição for verdadeira.
- **else**: Executa uma sequência de instruções se a condição for falsa.
- **else if**: Executa uma sequência de instruções se a condição for falsa.

Exemplos:

```js
let age = 19;

if (age >= 18) {
  console.log('Você é maior de idade!');
} else {
  console.log('Você é menor de idade!');
}
```

```js
let age = 19;

if (age >= 18) {
  console.log('Você é maior de idade!');
} else if (age >= 13) {
  console.log('Você é adolescente!');
} else {
  console.log('Você é menor de idade!');
}
```

_**Dica:**_ Podemos utilizar quantos else ifs quisermos.

## Operadores lógicos

- **&&**: Espera que duas condições sejam verdadeiras.
- **||**: Espera que uma das condições seja verdadeira.
- **!**: Nega uma condição.

Exemplos:

```js
let age = 19;
let isApproved = true;

if (age >= 18 && isApproved) {
  console.log('Você é maior de idade e está aprovado!');
} else {
  console.log('Você é menor de idade ou não está aprovado!');
}
```

```js
let age = 32;
let isApproved = true;

if (age >= 18 || isApproved) {
  console.log('Você é maior de idade ou está aprovado!');
} else {
  console.log('Você é menor de idade e não está aprovado!');
}
```

```js
let age = 17;
let isApproved = true;

if (!isApproved) {
  console.log('Você não está aprovado!');
}
```

## Switch Case

- **case**: Executa uma sequência de instruções quando a condição for verdadeira.
- **default**: Executa uma sequência de instruções quando nenhuma condição for verdadeira.

Exemplos:

```js
let trafficLight = 'green';

switch (trafficLight) {
  case 'red':
    console.log('Pare!');
    break;

  case 'yellow':
    console.log('Aguarde!');
    break;

  case 'green':
    console.log('Vá!');
    break;

  default:
    console.log('Voe!');
    break;
}
```
