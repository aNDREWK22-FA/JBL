var swiper = new Swiper('.gallery', {
    slidesPerView: "1",
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev'
    },
    pagination: {
        el: ".swiper-scrollbar",
        type: "progressbar",
    },
});

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.navbar li a').on('click', function () {
        $('.header_burger, .navigation').removeClass('active');
        $('body').removeClass('lock');
    });
});




