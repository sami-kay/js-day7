const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');

one.addEventListener('click', () => {
  one.classList.toggle('clicked');
});
two.addEventListener('click', () => {
  two.classList.toggle('clicked');
});
three.addEventListener('click', () => {
  three.classList.toggle('clicked');
});
four.addEventListener('click', () => {
  four.classList.toggle('clicked');
});
five.addEventListener('click', () => {
  five.classList.toggle('clicked');
});
