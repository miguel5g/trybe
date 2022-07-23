# JavaScript - Array e loop For

## Variáveis simples

Exemplo de variável simples:

```js
let nome = 'João';
```

## Variáveis compostas

Exemplo de variável composta:

```js
let pizzas = ['Calabresa', 'Portuguesa', 'Napolitana'];
```

## O que são arrays?

Array é um tipo de variável composta que pode armazenar vários valores como uma lista onde cada item tem um índice que começa em 0.

Exemplo:

```js
let nomes = ['João', 'Maria', 'José'];

console.log(nomes);
// [
//   'João',
//   'Maria',
//   'José'
// ]
```

### Acessando os itens de um array através do índice.

```js
let nomes = ['João', 'Maria', 'José'];

console.log(nomes[0]); // João
```

### Editando um item do array:

```js
let nomes = ['João', 'Maria', 'José'];

nomes[0] = 'Pedro';

console.log(nomes);
// [
//   'Pedro',
//   'Maria',
//   'José'
// ]
```

### Inserindo um item no array:

```js
let nomes = ['João', 'Maria', 'José'];

nomes[3] = 'Pedro';

console.log(nomes);
// [
//   'João',
//   'Maria',
//   'José',
//   'Pedro'
// ]
```

### Inserindo um item no array com o método `push`:

```js
let nomes = ['João', 'Maria', 'José'];

nomes.push('Pedro');

console.log(nomes);
// [
//   'João',
//   'Maria',
//   'José',
//   'Pedro'
// ]
```

### Array.length

Retorna o tamanho do array.

```js
let nomes = ['João', 'Maria', 'José'];

console.log(nomes.length);
// 3
```

### Array.pop

Remove o último item do array e retorna o valor removido.

```js
let nomes = ['João', 'Maria', 'José'];

nomes.pop();

console.log(nomes);
// [
//   'João',
//   'Maria'
// ]
```

### Array.indexOf

Retorna o índice do item procurado.

```js
let nomes = ['João', 'Maria', 'José'];

console.log(nomes.indexOf('Maria'));
// 1
```

## O que são loops?

Loop é um tipo de estrutura de repetição que executa um bloco de código várias vezes.

## For loop

Para criar um for, você precisa passar 3 condições separadas pelo **;**:

1. Um trecho que executa apenas na primeira vez que o loop é executado.
2. Uma condição que é avaliada a cada iteração do loop.
3. Um trecho que executa apenas no fim de cada interação.

Se a condição for verdadeira, o loop é executado, se não, o loop é finalizado.

```js
for (let index = 0; index < 3; index += 1) {
  console.log(index);
}

// 0
// 1
// 2
```

## For of loop

Ele é utilizado para percorrer arrays.

```js
let nomes = ['João', 'Maria', 'José'];

for (let nome of nomes) {
  console.log(nome);
}
// João
// Maria
// José
```
