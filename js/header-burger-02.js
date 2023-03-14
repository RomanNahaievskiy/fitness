"use strict"

let menuBodyEl = document.querySelector('.menu__body');
let header = document.querySelector('.header');
let headerBackground = document.querySelector('.header__background');
let burgerEl = document.querySelector('[data-burger-menu]');
window.addEventListener('click', function (e) {
    if (
        e.target.closest('[data-burger-menu]')) {
        menuBodyEl.classList.toggle('menu__body_active');
        document.body.classList.toggle('lock');
    }
    if (e.target.closest('.lock')) {
        console.log(burgerEl.style.cssText);
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