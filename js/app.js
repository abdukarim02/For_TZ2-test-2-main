"use strict";
// header-burger

let burger = document.querySelector('.header__burger-button');
let menu = document.querySelector('.header__burger-menu');

burger.onclick = function () {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}

// swiper-js

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 3, // Количество слайдов на экране
      spaceBetween: 30, // Расстояние между слайдами
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { // С 768px и выше
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: { // С 1024px и выше
          slidesPerView: 2,
          spaceBetween: 5
        },
        1440: { // С 1440px и выше
          slidesPerView: 3,
          spaceBetween: 40
        },
      }
    });
  });

//   tabs

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// faq  

$(document).ready(function() {

  $('.faq__question').on('click', function() {

      var answer = $(this).next();
      $('.faq__answer').not(answer).slideUp('.active');
      answer.slideDown(1300);
       $('.faq__question').toggleClass('.active');
  });

});