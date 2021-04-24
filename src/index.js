import './style.css';

/*Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.*/

console.log('funguju!');

const btn = document.querySelector('.order-btn');
let ordered = false;
btn.addEventListener('click', (event) => {
  const order = document.querySelector('.drink__cup');

  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    btn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove;
    btn.textContent = 'Objednat';
    ordered = false;
  }
});
