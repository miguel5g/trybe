function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth() {
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.getElementById('days');

  daysList.innerHTML = '';

  dezDaysList.forEach((day) => {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.classList.add('day');
    holidays.includes(day) && dayListItem.classList.add('holiday');
    fridays.includes(day) && dayListItem.classList.add('friday');

    dayListItem.setAttribute('data-day', day);

    dayListItem.addEventListener('mouseover', mouseIn);
    dayListItem.addEventListener('mouseout', mouseOut);

    daysList.appendChild(dayListItem);
  });
}

createDaysOfTheMonth();

function createHolidaysButton(value = 'Feriados') {
  const button = document.createElement('button');
  button.innerHTML = value;
  button.id = 'btn-holiday';
  button.addEventListener('click', handleHolidaysButtonClick);
  button.setAttribute('type', 'button');

  document.querySelector('.buttons-container')?.appendChild(button);
}

createHolidaysButton();

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function handleHolidaysButtonClick() {
  const color = randomColor();

  document.querySelectorAll('.holiday').forEach((holiday) => {
    holiday.style.backgroundColor = color;
  });
}

function createFridaysButton(value = 'Sexta-feira') {
  const button = document.createElement('button');
  button.innerHTML = value;
  button.id = 'btn-friday';
  button.addEventListener('click', handleFridaysButtonClick);

  document.querySelector('.buttons-container')?.appendChild(button);
}

createFridaysButton();

function handleFridaysButtonClick() {
  document.querySelectorAll('.friday').forEach((friday) => {
    if (friday.getAttribute('data-day') === friday.innerText) {
      friday.innerText = randomColor();
    } else {
      friday.innerText = friday.getAttribute('data-day');
    }
  });
}

function mouseIn(event) {
  event.target.style.transform = 'scale(2)';
}

function mouseOut(event) {
  event.target.style.transform = 'scale(1)';
}

function addTask(content = 'Sem conteúdo') {
  const task = document.createElement('span');
  task.innerHTML = content;
  
  document.querySelector('.my-tasks')?.appendChild(task);
}