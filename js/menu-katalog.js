(function() {
    let katalog1Btn = document.querySelector('#katalog1-btn');
    let katalog1 = document.querySelector('#katalog1');

    document.addEventListener('DOMContentLoaded', function() {
        katalog1Btn.addEventListener('mouseover', function() {
            katalog1.classList.add('menu-katalog-active');
            katalog1Btn.classList.add('header-menu__nav-link__hover');
        });

        document.addEventListener('click', function() {
            katalog1.classList.remove('menu-katalog-active');
            katalog1Btn.classList.remove('header-menu__nav-link__hover');
        })
    })
})();