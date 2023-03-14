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
        headerBackground.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 86px;
        z-index: 2;
        background-color: #fff;
        transition: all 0.1s ease 0s;
        `;
    } else {
        headerBackground.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 86px;
        z-index: 2;
        background-color: transparent;
        transition: all 0.6s ease 0s;
        `;
    }
})
// заготовка до прозорого фону , коли миша на  хедері
window.addEventListener('mouseover', function (e) {
    if (e.target.closest('.header')) {
        headerBackground.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 86px;
        z-index: 2;
        background-color: #ffffff8f;
        transition: all 0.1s ease 0s;
        `;
    } else {
        headerBackground.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 86px;
        z-index: 2;
        background-color: transparent;
        transition: all 0.6s ease 0s;
        `;
    }
})
