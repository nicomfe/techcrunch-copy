import '../styles/index.scss';
import '../styles/menu.scss';
import $ from 'jquery';

console.log('webpack starterkit');

window.toggleMenu = () => {
  $('.mobile-menu-container').toggleClass('overlay-container');
  $('.nav-bar').toggleClass('nav-bar-overlay');

  $('.burger-button').toggleClass('hide-button');
  $('.close-button').toggleClass('hide-button');

  $('.burger-button').toggleClass('show-button');
  $('.close-button').toggleClass('show-button');
};
