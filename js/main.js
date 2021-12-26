$(document).ready(function(){

    const navIcon = document.querySelector('.nav-mobile');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('#overlay')

    navIcon.addEventListener('click', function () {
        this.classList.toggle('nav-icon--active');
        nav.classList.toggle('nav--active');
        overlay.classList.toggle('active')
        document.body.classList.toggle('noscroll')
    });

    // Находим ссылки внутри мобильной навигации
    const navLinks = document.querySelectorAll('.nav a');

    // Обходим ссылки методом forEach
    navLinks.forEach(function (item) {
        // Для каждой ссылки добавляем прослушку по событию "Клик"
        item.addEventListener('click', function () {
            navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
            nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
        })
    })
   

   $('#header-menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    });

})
