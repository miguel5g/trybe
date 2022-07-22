/* Header */
document.querySelector('#header-container').style.backgroundColor = '#00B069';

/* Tasks */
document.querySelector('.emergency-tasks').style.backgroundColor = '#FF9F84';
document.querySelectorAll('.emergency-tasks h3').forEach((element) => {
  element.style.backgroundColor = '#A500F3';
});
document.querySelector('.no-emergency-tasks').style.backgroundColor = '#F9DB5E';
document.querySelectorAll('.no-emergency-tasks h3').forEach((element) => {
  element.style.backgroundColor = '#232525';
});

/* Footer */
document.querySelector('#footer-container').style.backgroundColor = '#003533';