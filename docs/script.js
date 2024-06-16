'use strict';

let menuButton = document.querySelector('.menu-btn');
let headerMenu = document.querySelector('.header-menu-list');

// Set initial state of the menu (hidden)

let isMenuOpen = false;

menuButton.addEventListener('click', function () {
  if (isMenuOpen) {
    headerMenu.style.display = 'none';
  } else {
    headerMenu.style.display = 'block';
  }
  isMenuOpen = !isMenuOpen;
});
