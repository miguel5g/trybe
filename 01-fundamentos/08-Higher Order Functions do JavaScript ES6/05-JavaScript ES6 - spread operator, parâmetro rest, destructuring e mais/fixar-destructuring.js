const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = {
  ...user,
  ...jobInfos,
};

function showInfos({ name, age, nationality, profession, squad, squadInitials }) {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
}

console.log(showInfos(userInfo));

/* Array */

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, mostrarSaudacao] = saudacoes;

mostrarSaudacao(saudacao);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const [food, pet, drink] = [bebida, comida, animal];

console.log(food, pet, drink);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
const [, , , six, eight, ten, twelve] = numerosPares;
numerosPares = [six, eight, ten, twelve];

console.log(numerosPares);
