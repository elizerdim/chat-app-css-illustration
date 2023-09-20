const messages = document.getElementsByClassName('phone__msg');

for (let i = 0; messages.length > i; i++) {
  setTimeout(() => messages[i].classList.add('display'), i * 1000);
}