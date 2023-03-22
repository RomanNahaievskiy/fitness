"use strict"


window.addEventListener('click', function spoilerActive(event) {

    if (event.target.closest('[data-spoller]')) {
        const spollersButton = event.target.closest('[data-spoller]');
        const spollersItem = event.target.closest('.spollers__item');
        spollersItem.classList.toggle('active');
        console.log(spollersItem);

        // if (spollersItem.classList.contains('active')) {

        //     spollersButton.nextElementSibling.hidden = false;
        //     console.log('v')
        // } else {

        //     spollersButton.nextElementSibling.hidden = true;
        //     console.log('h')
        // }
    }
});