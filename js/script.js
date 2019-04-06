"use strict";

var links = document.querySelectorAll('.features__nav-link');

var handle = function handle(e) {
  e.preventDefault();
  var nav = e.target.closest('.features__tabs');

  if (!nav.querySelector('.features__tab-pane.active')) {
    var nextTabContentId = e.target.closest('.features__nav-link').hash;
    var nextTabContent = nav.querySelector(nextTabContentId);
    nextTabContent.classList.add('active');
    e.target.closest('.features__nav-item').classList.add('active');
  } else {
    var current = nav.querySelector('.features__tab-pane.active');
    var currentItem = nav.querySelector('.features__nav-item.active');
    current.classList.remove('active');
    currentItem.classList.remove('active');
    var _nextTabContentId = e.target.closest('.features__nav-link').hash;

    var _nextTabContent = nav.querySelector(_nextTabContentId);

    if (_nextTabContentId.slice(1) === current.id) return;

    _nextTabContent.classList.add('active');

    e.target.closest('.features__nav-item').classList.add('active');
  }
};

links.forEach(function (link) {
  link.addEventListener('click', handle);
});
var btnScrollDown = document.querySelector('.page-header__scroll-btn');

var scrollDown = function scrollDown() {
  var windowCoords = document.documentElement.clientHeight;

  var scroll = function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
  };

  scroll();
};

btnScrollDown.addEventListener('click', scrollDown);
var domenInput = document.querySelector('.page-header__checking');
var submitBtn = document.querySelector('.page-header__submit');
var message = document.querySelector('.page-header__message');
domenInput.addEventListener('input', function () {
  if (message.classList.contains('active')) {
    message.classList.remove('active');
  }
});
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var span = document.createElement('span');
  span.textContent = "\u0414\u043E\u043C\u0435\u043D ".concat(domenInput.value, ".ru - \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D. ");
  message.prepend(span);
  message.classList.add('active');
});
var indicator = document.querySelector('.indicator');
window.addEventListener('scroll', function () {
  var scrolled = window.pageYOffset;

  if (scrolled > 400) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--second').classList.add('active');
  }

  if (scrolled > 1250) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--third').classList.add('active');
  }

  if (scrolled <= 400) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--first').classList.add('active');
  }
});