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
    animationDuration: 300,
    autoplay: 3000
}).mount()

new Glide('.j-people-carousel', {
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
    animationDuration: 300,
    autoplay: 3000
}).mount()
