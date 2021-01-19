'use_strict';

const portfolio = document.getElementById('portfolio');
const homeButton = document.querySelector('.home-link')
const heroTop = document.querySelector('#hero-top');
const navTop = portfolio.offsetTop;


document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

homeButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('clicked');
  heroTop.scrollIntoView({ behavior: 'smooth'});
});

const stickToTop = function () {
  if (window.scrollY >= navTop) {
    portfolio.classList.add('pinToTop');
    homeButton.classList.remove('hidden')
    portfolio.style.transform = 'translateY(0px)'
  } else {
    portfolio.classList.remove('pinToTop');
    homeButton.classList.add('hidden')
  }
}

window.addEventListener('scroll', stickToTop);