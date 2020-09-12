const input = document.getElementById('input');
const alertPage = document.querySelector('.alert-page');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const animated = document.getElementById('animated');

function getPassword() {
  const characters =
    '12389abcdefghIJKLMNOPRSTuvwtz!@#$%^&*()_+?>4567<:{}[]ABCDEFGHijklmnoprstUVWXYZ';

  let passwordLenght = 16;
  let password = '';

  for (let i = 0; i < passwordLenght; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
}

function copyPassword() {
  if (input.value) {
    input.select();
    input.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand('copy');
    alertPage.classList.toggle('show');
    div1.textContent = `Copied to clipboard: `.toUpperCase();
    div2.textContent = `${input.value}`;
    animated.classList.add('complete-title');
    animated.textContent = 'SUCCESS';
  } else {
    alertPage.classList.toggle('show');
    div1.textContent = `Generate a password first`.toUpperCase();
    div2.textContent = '';
  }

  setTimeout(function () {
    alertPage.classList.toggle('show');
    animated.classList.remove('complete-title');
    animated.textContent = 'Random Password Generator';
  }, 2000);

  input.value = '';
}
