// @ts-nocheck
// сортировка


let filterAmount = document.querySelector('.filter-amount');
let filterAge = document.querySelector('.filter-age');

filterAmount.onchange = () => {
  if (filterAmount.checked) {
    sortAmount();
  } else {
    sortAmount(1);
  }
}

filterAge.onchange = () => {
  if (filterAge.checked) {
    sortAge();
  } else {
    sortAge(1);
  }
}

function sortAmount(reverse) {
  let cats = document.querySelectorAll('.cats__item');
  let itemsArray = [];
  let catsList = document.querySelector('.cats__list');

  for (let i = 0; i < cats.length; i++) {    
    itemsArray.push(catsList.removeChild(cats[i]));
  }

  itemsArray.sort(function(a, b) {
    if (a.dataset.amount < b.dataset.amount) {
      return reverse ? 1 : -1;
    }
    if (a.dataset.amount > b.dataset.amount) { 
      return reverse ? -1 : 1;
    }
    return 0;
    })
    .forEach(function(node) {
      catsList.appendChild(node)
    });
}


function sortAge(reverse) {
  let cats = document.querySelectorAll('.cats__item');
  let itemsArray = [];
  let catsList = document.querySelector('.cats__list');

  for (let i = 0; i < cats.length; i++) {    
    itemsArray.push(catsList.removeChild(cats[i]));
  }

  itemsArray.sort(function(a, b) {
    if (a.dataset.age < b.dataset.age) {
      return reverse ? 1 : -1;
    }
    if (a.dataset.age > b.dataset.age) { 
      return reverse ? -1 : 1;
    }
    return 0;
    })
    .forEach(function(node) {
      catsList.appendChild(node)
    });
}


