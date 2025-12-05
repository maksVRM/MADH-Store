let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPosss = window.pageYOffset;

    if (prevScrollpos > currentScrollPosss) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-50px';
    }

    prevScrollpos = currentScrollPosss;
}


$('.menu-toggle').on('click', function () {
    const menu = $('.menu');

    if (!menu.hasClass('open')) {
        // ПЕРВОЕ включение: показываем, потом включаем анимацию
        menu.show(0);
        requestAnimationFrame(() => {
            menu.addClass('open');
        });
    } else {
        // Закрытие: убираем класс, ждём завершения transition, потом скрываем
        menu.removeClass('open');

        menu.one('transitionend', () => {
            menu.hide(0);              // display: none
        });
    }

    return false;
});


$('.menu-toggle').on('click', function () {
    $('footer').toggleClass('close')
    $('section').toggleClass('close')

    return false
})


const icon = document.getElementById('menu-toggle')

let toggled = false
icon.addEventListener('click', () => {
    if (!toggled) {
        icon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.7782 5.63599C20.1687 5.24547 20.1687 4.6123 19.7782 4.22178C19.3877 3.83125 18.7545 3.83125 18.364 4.22178L13.4142 9.17153C12.6332 9.95257 11.3668 9.95257 10.5858 9.17153L5.63604 4.22178C5.24552 3.83125 4.61235 3.83125 4.22183 4.22178C3.8313 4.6123 3.8313 5.24547 4.22183 5.63599L9.17157 10.5857C9.95262 11.3668 9.95262 12.6331 9.17157 13.4142L4.22183 18.3639C3.8313 18.7544 3.8313 19.3876 4.22183 19.7781C4.61235 20.1687 5.24552 20.1687 5.63604 19.7781L10.5858 14.8284C11.3668 14.0473 12.6332 14.0473 13.4142 14.8284L18.364 19.7781C18.7545 20.1687 19.3876 20.1687 19.7782 19.7781C20.1687 19.3876 20.1687 18.7544 19.7782 18.3639L14.8284 13.4142C14.0474 12.6331 14.0474 11.3668 14.8284 10.5857L19.7782 5.63599Z"
                        fill="black"></path>
                </svg>`
    } else {
        icon.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" rx="1" fill="black"></rect>
                        <rect y="11" width="24" height="2" rx="1" fill="black"></rect>
                        <rect y="17" width="24" height="2" rx="1" fill="black"></rect>
                    </svg>`
    }
    toggled = !toggled
})



// carousel
let index = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const imgWidth = images[0].clientWidth;

    index += direction;

    // защита от выхода за границы
    if (index < 0) index = 0;
    if (index > images.length - 3) index = images.length - 3;

    slider.style.transform = `translateX(-${index * imgWidth}px)`;
}

