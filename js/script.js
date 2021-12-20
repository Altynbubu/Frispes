const swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
});



document.querySelector("body > div.wrapper._loaded > main > section.page__our-facilities.our-facilities > div > div.our-facilities__header > div.our-facilities__control > div.our-facilities__navigation._active._slider-arrows > div.our-facilities__next._slider-arrow._slider-arrow_right.our-facilities__next_righ")

const swiper1 = new Swiper('.swiper__1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const swiper2 = new Swiper('.swiper__1', {

});