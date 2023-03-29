"use strict"

const menuBodyEl = document.querySelector('.menu__body');
const header = document.querySelector('.header');
const headerBackground = document.querySelector('.header__background');
const burgerEl = document.querySelector('[data-burger-menu]');
window.addEventListener('click', function (e) {
    if (e.target.closest('[data-burger-menu]')) {
        menuBodyEl.classList.toggle('menu__body_active');
        document.body.classList.toggle('lock');
    }
    if (e.target.closest('.lock')) {
        // тут краще додати клас для підложки а вже в scss прописати ці стилі для нього
        headerBackground.classList.add('_active');
    } else {
        headerBackground.classList.remove('_active');
    }
})

//========================================================================================================================================================
//SCROLL event


const arrScroll = [];// cтворив масив значень скролу для відлову попередніх значень (потрібно придумати , як його очищувати , якщо там більше ніж 2 елементи)
window.addEventListener('scroll', (e) => {
    arrScroll.push(scrollY);
    // (обмежую масив до 2х останніх свіжих значень) є думка обмежувати до 10 і  в результаті різниці значень впливати на затримку появи шапки .
    if (arrScroll.length > 2) {
        arrScroll.splice(0, 1);
    }

    // let prevScroll = arrScroll[arrScroll.length - 2];
    // let lastScroll = arrScroll[arrScroll.length - 1];
    // трішки оптимізації не завадить
    let prevScroll = arrScroll[0];
    let lastScroll = arrScroll[1];

    // якщо скролимо вниз то ховаємо шапочку меню
    if (lastScroll > prevScroll) {
        //todo заставити сховатися шапку
        // звертаюся до шапки  покласу і додаю ще один клас  ._scroll-down , або можна додавати  якийсь дата-атрибут 
        // даний клас ще опишу в файлі стилів 
        header.classList.add('_scroll-down');

    }
    // якщо скролимо вгору то показуємо шапочку меню
    else {   //if (lastScroll < prevScroll)
        //todo заставити показатися шапку
        // звертаюся до шапки  покласу і видаляю клас  ._scroll-down 
        header.classList.remove('_scroll-down');
    }



}
)


