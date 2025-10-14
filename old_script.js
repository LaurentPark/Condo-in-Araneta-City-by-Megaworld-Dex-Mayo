// For future interactive features like testimonials carousel or contact form enhancements
console.log("Website loaded successfully.");
console.log("Website loaded successfully.");

// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Add click event to each service card
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = card.dataset.img;
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const images = document.querySelectorAll('.scroll-img');
  function revealImages() {
    images.forEach(img => {
      const windowHeight = window.innerHeight;
      const imgTop = img.getBoundingClientRect().top;
      if (imgTop < windowHeight - 100) {
        img.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealImages);
  revealImages();

  function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
let modalIndex = 0;
let modalImages = [];

function openModal(img, ...newSrcs) {
  modalImages = newSrcs; 
  modalIndex = 0;

  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = modalImages[modalIndex];
  caption.innerHTML = img.alt;
}

function nextImage() {
  modalIndex = (modalIndex + 1) % modalImages.length;
  document.getElementById("modalImg").src = modalImages[modalIndex];
}

function prevImage() {
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
  document.getElementById("modalImg").src = modalImages[modalIndex];
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
