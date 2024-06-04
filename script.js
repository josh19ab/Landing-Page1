// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Animate on scroll
window.addEventListener('scroll', function() {
  const heroContent = document.querySelector('.hero-content');
  const heroContentPosition = heroContent.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (heroContentPosition < windowHeight / 1.2) {
    heroContent.classList.add('animate');
  }
});

// Search bar functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    console.log('Searching for:', searchTerm);
  }
});

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});

// Button functionality
const freeTrialButton = document.getElementById('freeTrialButton');
const buyNowButton = document.getElementById('buyNowButton');

freeTrialButton.addEventListener('click', function() {
  console.log('Free trial clicked');
});

buyNowButton.addEventListener('click', function() {
  console.log('Buy now clicked');
});