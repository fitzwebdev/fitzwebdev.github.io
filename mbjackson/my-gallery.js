new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    //effect: "flip",
    autoplay: {
        delay: 4000,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});