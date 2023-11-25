document.addEventListener("DOMContentLoaded", function() {
    // Logo slider
    var swiper = new Swiper(".mySwiper.logo-slider", {
        slidesPerView: 8,
        spaceBetween: 85,
        loop: true,
        allowTouchMove: true,
        grabCursor: true,
        autoplay: {
            delay: 1500,
        },
    });

    // Testmonial Slider 
    var swiper = new Swiper(".mySwiper.testimonials", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        allowTouchMove: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
});