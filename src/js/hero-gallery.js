import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: true,
  autoplay: {
    delay: 2000,
  },
});

const swiperSlide = document.querySelector('.swiper-slide');

console.log(swiperSlide);

const swiperSlideActive = document.querySelector('.swiper-slide-active');
console.log(swiperSlideActive);
