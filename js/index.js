const menu = document.querySelector(".j-menu");
const navbar = document.querySelector(".j-navbar");

menu.addEventListener('click', () => {
    navbar.classList.toggle("is-open");
});

new Glide('.j-service-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        767: {
            perView: 1,
        },
        991: {
            perView: 2,
        }
    },
    gap: 10,
    swipeThreshold: 20,
}).mount()

new Glide('.j-promotions-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    animationDuration: 1200,
    autoplay: 6000,
    swipeThreshold: 20,
}).mount()
