# JavaScript - Objetos e funções

## O que são objetos?

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

### Propriedades e métodos

Objetos guardam informações no formato de chave-valor onde cada chave vai ter um valor.

Também podemos chamar chaves de propriedades do objeto.

Cada chave pode ter um valor igual uma variável.

Exemplo:

```js
const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 1964,
  cor: 'prata',
};
```

O objeto `carro` tem as seguintes propriedades:

- `marca`
- `modelo`
- `ano`
- `cor`

Para acessar um valor podemos utilizar o operador de ponto (`.`):

Exemplo:

```js
console.log(carro.marca); // Ford
```

Isso quer dizer que ele vai procurar uma propriedade chamada `marca` no objeto `carro` e o valor dela vai ser impresso no console.

Também podemos acessar valores de propriedades de forma dinâmica.

Exemplo:

```js
console.log(carro['marca']); // Ford
```

Da mesma forma que o operador de ponto (`.`) podemos acessar valores de propriedades de forma dinâmica onde ele vai utilizar a string que passarmos dentro de chaves para procurar uma propriedade.

## O que são funções?

um conjunto de instruções que executa uma tarefa ou calcula um valor.

Exemplo:

```js
function soma(a, b) {
  return a + b;
}
```

Invocar uma função é fazer com que ela seja executada.

Exemplo:

```js
console.log(soma(1, 2)); // 3
```

## For In

Uma forma de inteirar por objetos e arrays é utilizando o operador `for in`.

Exemplo:

```js
let pizza = {
  sabor: 'calabresa',
  preco: 39.9,
  bordaCatupiry: true,
};

for (let chave in carro) {
  console.log('Chave', chave);
  console.log('Valor', pizza[chave]);
}
// Chave sabor
// Valor calabresa
// Chave preco
// Valor 39.90
// Chave bordaCatupiry
// Valor true
```

## For Of

Funciona da mesma maneira que o for in, porém ao invés de retornar um índice, ele retorna um valor.

Exemplo:

```js
let pizza = {
  sabor: 'calabresa',
  preco: 39.9,
  bordaCatupiry: true,
};

for (let valor of carro) {
  console.log('Valor', valor);
}
// Valor calabresa
// Valor 39.90
// Valor true
```
