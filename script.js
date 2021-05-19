// @ts-nocheck
// кнопка вверх

let upButton = document.querySelector('.arrow-up');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        upButton.classList.add('arrow-up_show')
    } else {
        upButton.classList.remove('arrow-up_show');
    }
};

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// добавление в избранное

let hearts = document.querySelectorAll('.heart');
let popup = document.querySelector('.popup');

hearts.forEach((item) => {
  item.addEventListener('click', (evt) => {
    let coord = evt.target.getBoundingClientRect();
    item.classList.toggle('heart_like');
    if (item.classList.contains('heart_like')) {
      popup.style.left = coord.left - 75 + 'px';
      popup.style.top = coord.top + 50 + 'px';
      popup.classList.add('popup_show');
      setTimeout(() => {
        popup.classList.remove('popup_show');
      }, 1000);
    }
  })
});

// отчистка формы

let formInput = document.querySelector('.form__input');
let footerForm = document.querySelector('.footer__form');

footerForm.onsubmit = () => {
  formInput.value = '';
}


let solds = document.querySelectorAll('.sold');

solds.forEach((item) => {
  item.textContent = 'Продан';
})



