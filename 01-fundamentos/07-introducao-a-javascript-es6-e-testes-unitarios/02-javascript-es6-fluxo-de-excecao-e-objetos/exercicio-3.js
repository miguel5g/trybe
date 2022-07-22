const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addProperty(object, property, value) {
  object[property] = value;

  return object;
}

console.log(addProperty(lesson2, 'turno', 'noite'));

function getKeys(object) {
  return Object.keys(object);
}

console.log(getKeys(lesson1));

function getLength(object) {
  return Object.keys(object).length;
}

console.log(getLength(lesson1));

function getValues(object) {
  return Object.values(object);
}

console.log(getValues(lesson1));

const allLessons = Object