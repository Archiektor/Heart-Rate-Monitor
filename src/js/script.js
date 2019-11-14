// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         infinite: false,
//         speed: 1200,
//         fade: true,
//         cssEase: 'linear',
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="left arrow"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="right arrow"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    // responsive: {
    //     640: {
    //         edgePadding: 20,
    //         gutter: 20,
    //         items: 2
    //     },
    //     700: {
    //         gutter: 30
    //     },
    //     900: {
    //         items: 3
    //     }
    // },
    slideBy: 'page',
    autoplay: false,
    center: true,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});