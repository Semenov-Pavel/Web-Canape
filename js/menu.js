(function() {
    let burger = document.querySelector('#burger');
    let closeBtn = document.querySelector('#close-menu');
    let menu = document.querySelector('#menu');

    document.addEventListener('DOMContentLoaded', function() {
        burger.addEventListener('click', function() {
            menu.classList.add('menu-open');
        });

        closeBtn.addEventListener('click', function() {
            menu.classList.remove('menu-open');
        });
    });
})();