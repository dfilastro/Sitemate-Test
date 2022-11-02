const popup = document.querySelector('.popup--choice');
const clickBtn = document.querySelector('.btn--click');
const yesBtn = document.querySelector('.btn--yes');
const cancelBtn = document.querySelector('.btn--cancel');
const title = document.querySelector('.user--choice');
const background = document.querySelector('.overlay');

const sentence = 'You just clicked ';

clickBtn.addEventListener('click', function () {
  popup.classList.remove('hidden');
  background.classList.remove('hidden');
  title.innerHTML = '';
});

yesBtn.addEventListener('click', function () {
  const desc = yesBtn.getAttribute('id');
  title.innerHTML = `${sentence} <span>${desc}</span>`;
  popup.classList.add('hidden');
  background.classList.add('hidden');
});

cancelBtn.addEventListener('click', function () {
  const desc = cancelBtn.getAttribute('id');
  title.innerHTML = `${sentence} <span>${desc}</span>`;
  popup.classList.add('hidden');
  background.classList.add('hidden');
});
