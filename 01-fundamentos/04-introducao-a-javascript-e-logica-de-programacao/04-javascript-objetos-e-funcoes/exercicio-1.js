let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* 1. */

console.log('Bem-vinda,', info.personagem);

/* 2. */

info['recorrente'] = 'Sim';

console.log(info);

/* 3. */

for (key in info) {
  console.log(key);
}

/* 4. */

for (key in info) {
  console.log(info[key]);
}

/* 5 */

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (key in info) {
  if (info[key] === info2[key]) {
    console.log('Ambos', key);
  } else {
    console.log(info[key], 'e', info2[key]);
  }
}

/* <-> */

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

/* 6. */

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.idade}'`);

/* 7. */

let newBook = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

leitor.livrosFavoritos.push(newBook);

/* 8. */

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);
