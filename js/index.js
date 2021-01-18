'use_strict';

const portfolio = document.getElementById('portfolio');
const navTop = portfolio.offsetTop;


document.querySelector('.hero-links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('hero-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const stickToTop = function () {
  if (window.scrollY >= navTop) {
    portfolio.classList.add('pinToTop');
    portfolio.style.transform = 'translateY(0px)'
  } else {
    portfolio.classList.remove('pinToTop');
  }
}

window.addEventListener('scroll', stickToTop);