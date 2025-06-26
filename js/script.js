// Highlight clicked place card
document.querySelectorAll('.place-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.place-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});





//slider
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.place-card');
  const container = document.querySelector('.slider-container');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove 'active' from all cards
      cards.forEach(c => c.classList.remove('active'));

      // Add 'active' to clicked one
      card.classList.add('active');

      // Center the clicked card
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset = cardRect.left - containerRect.left;
      const scroll = offset - container.clientWidth / 2 + card.clientWidth / 2;

      container.scrollBy({ left: scroll, behavior: 'smooth' });
    });
  });
});

//scrollFunction
document.querySelector('a[href="#explore-section"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#explore-section').scrollIntoView({ behavior: 'smooth' });
});
//footer
document.querySelector('a[href="#about-footer"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-footer').scrollIntoView({ behavior: 'smooth' });
});


// Modal logic
const modal = document.getElementById("popup-modal");
const openBtn = document.querySelector(".read-more");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
