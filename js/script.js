const link = document.querySelector('.map-button');
const popup = document.querySelector('.popup');
const close = popup.querySelector('.popup-close');
const form = popup.querySelector('.popup-form');
const login = popup.querySelector('.user-name');
const mail = popup.querySelector('.user-email');
const storage = localStorage.getItem('user-name');
const slideOne = document.querySelector('.slide-first');
const slideTwo = document.querySelector('.slide-second');
const slideThree = document.querySelector('.slide-third');
const buttonFirst = document.querySelector('.first-button');
const buttonSecond = document.querySelector('.second-button');
const buttonThird = document.querySelector('.third-button');

//slider

buttonFirst.addEventListener('click', function (event) {
  event.preventDefault();
  slideOne.classList.add('slide-active');
  buttonFirst.classList.add('active-button');
  slideTwo.classList.remove('slide-active');
  buttonSecond.classList.remove('active-button');
  slideThree.classList.remove('slide-active');
  buttonThird.classList.remove('active-button');
});

buttonSecond.addEventListener('click', function (event) {
  event.preventDefault();
  slideTwo.classList.add('slide-active');
  buttonSecond.classList.add('active-button');
  slideOne.classList.remove('slide-active');
  buttonFirst.classList.remove('active-button');
  slideThree.classList.remove('slide-active');
  buttonThird.classList.remove('active-button');
});

buttonThird.addEventListener('click', function (event) {
  event.preventDefault();
  slideThree.classList.add('slide-active');
  buttonThird.classList.add('active-button');
  slideTwo.classList.remove('slide-active');
  buttonSecond.classList.remove('active-button');
  slideOne.classList.remove('slide-active');
  buttonFirst.classList.remove('active-button');
});

//popup

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (event) {
if (!login.value || !password.value) {
  popup.classList.remove('modal-error');
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add('modal-error');
  event.preventDefault();
  } else {
    localStorage.setItem('login', login.value);
    localStorage.setItem('mail', password.value);
  }
});

window.addEventListener('keydown', function (event) {
if (event.keyCode === 27) {
  if (popup.classList.contains('modal-show')) {
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
  }
}
});
