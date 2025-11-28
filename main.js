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
