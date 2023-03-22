const slides = document.querySelectorAll('.hero-section__slide');
const prev = document.querySelector('.swiper-button-prev');
const next = document.querySelector('.swiper-button-next');
const pagination = document.querySelector('.swiper-paginator');
const paginationItems = pagination.querySelectorAll('.swiper-paginator-bullet');

let currentSlide = 0;

function showSlide(n) {
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = 'none';
}
slides[n].style.display = 'flex';
updatePagination(n);
}

function updatePagination(n) {
for (let i = 0; i < paginationItems.length; i++) {
paginationItems[i].classList.remove('active');
}
paginationItems[n].classList.add('active');
}

showSlide(currentSlide);

function nextSlide() {
currentSlide++;
if (currentSlide >= slides.length) {
currentSlide = 0;
}
showSlide(currentSlide);
}

function prevSlide() {
currentSlide--;
if (currentSlide < 0) {
currentSlide = slides.length - 1;
}
showSlide(currentSlide);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

paginationItems.forEach((item, index) => {
item.addEventListener('click', () => {
currentSlide = index;
showSlide(currentSlide);
});
});