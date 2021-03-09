const link = document.querySelector('.map-button');
const popup = document.querySelector('.popup');
const close = popup.querySelector('.popup-close');
const form = popup.querySelector('.popup-form');
const login = popup.querySelector('.user-name');
const mail = popup.querySelector('.user-email');
const storage = localStorage.getItem('user-name');

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
