const openMobMenuButton = document.querySelector('.header-menu-button');
const closeMobMenuButton = document.querySelector('.modal-button-close');
const mobMenu = document.querySelector('.mob-menu');
openMobMenuButton.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  closeMobMenuButton.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
  });
});

const openOrderFormButton = document.querySelector('.order-form-button');
const closeOrderFormButton = document.querySelector('.form-button-close');
const orderForm = document.querySelector('.backdrop');
const form = document.querySelector('.modal-form');

openOrderFormButton.addEventListener('click', () => {
  orderForm.classList.add('is-open');
  closeOrderFormButton.addEventListener('click', () => {
    orderForm.classList.remove('is-open');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    orderForm.classList.remove('is-open');
  });
});
