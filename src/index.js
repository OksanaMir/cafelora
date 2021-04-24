import './style.css';
//import './index.html';
import { Layer } from './Layer/index.js';

let navBtn = document.querySelector('#nav-btn');
let navigation = document.querySelector('nav');
navBtn.addEventListener('click', () => {
  navigation.classList.toggle('nav-closed');
});

const navItems = navigation.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});

const orderBtn = document.querySelector('.order-btn');
let ordered = false;
orderBtn.addEventListener('click', (event) => {
  const order = document.querySelector('.drink__cup');

  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove;
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
});

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({
  color: '#feeeca',
  label: 'mléčná pěna',
});

drinkInfoElm.innerHTML += Layer({
  color: '#fed7b0',
  label: 'teplé mléko',
});

drinkInfoElm.innerHTML += Layer({
  color: '#613916',
  label: 'espresso',
});
