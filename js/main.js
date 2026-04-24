// Back to Top
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Navbar scrolled
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Search input
const searchBtn = document.getElementById('searchBtn');
const searchBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  searchBox.classList.toggle('active');

  if (searchBox.classList.contains('active')) {
    document.getElementById('searchInput').focus();
  }
});

document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
    searchBox.classList.remove('active');
  }
});

searchBox.addEventListener('click', (e) => {
  e.stopPropagation();
});

const products = [
  { name: "Velvet Accent Chair", price: "$250", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=100" },
  { name: "Modern Wooden Table", price: "$180", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100" },
  { name: "Classic Leather Sofa", price: "$899", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100" },
  { name: "Minimalist Lamp", price: "$45", img: "https://images.unsplash.com/photo-1513519247388-19345420d4c7?w=100" }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  searchResults.innerHTML = ''; 

  if (query.length > 0) {
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));

    if (filtered.length > 0) {
      filtered.forEach(product => {
        const item = document.createElement('a');
        item.href = "#";
        item.className = 'result-item';
        item.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <div class="result-info">
                        <h5>${product.name}</h5>
                        <span>${product.price}</span>
                    </div>
                `;
        searchResults.appendChild(item);
      });
      searchResults.classList.add('active');
    } else {
      searchResults.innerHTML = '<div class="no-result">No products found</div>';
      searchResults.classList.add('active');
    }
  } else {
    searchResults.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    searchResults.classList.remove('active');
  }
});


// Hero Slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}, 5000);


// Slider Trending Products
const productWrapper = document.getElementById('productWrapper');
const prevProduct = document.getElementById('prevProduct');
const nextProduct = document.getElementById('nextProduct');

let productIndex = 0;
const totalProducts = 6;
const visibleProducts = 4;
const maxIndex = totalProducts - visibleProducts;

nextProduct.addEventListener('click', () => {
  if (productIndex < maxIndex) {
    productIndex++;
  } else {
    productIndex = 0;
  }
  updateProductSlider();
});

prevProduct.addEventListener('click', () => {
  if (productIndex > 0) {
    productIndex--;
  } else {
    productIndex = maxIndex;
  }
  updateProductSlider();
});

function updateProductSlider() {
  const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
  productWrapper.style.transform = `translateX(-${productIndex * cardWidth}px)`;
}

window.addEventListener('resize', updateProductSlider);


// Countdown Timer 
const countdownDate = new Date("May 31, 2026 23:59:59").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);


// Testimonial Slider 
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const tDots = document.querySelectorAll('.t-dot');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  tDots.forEach(d => d.classList.remove('active'));

  testimonials[index].classList.add('active');
  tDots[index].classList.add('active');
}

function currentTestimonial(index) {
  testimonialIndex = index;
  showTestimonial(testimonialIndex);
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}, 5000);

