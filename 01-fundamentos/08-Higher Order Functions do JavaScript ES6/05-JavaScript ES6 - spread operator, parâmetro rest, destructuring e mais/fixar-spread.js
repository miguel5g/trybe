// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Abacaxi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Chantili', 'Calda de Morango'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));
