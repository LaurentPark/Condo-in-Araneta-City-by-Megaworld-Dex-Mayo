document.addEventListener('DOMContentLoaded', function () {
  console.log("Website loaded successfully.");

  // ----------------------------
  // Swiper Setup
  // ----------------------------
  if (typeof Swiper !== 'undefined') {
    const commonOpts = {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      centeredSlides: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    };

    new Swiper('.listings-swiper', {
      ...commonOpts,
      pagination: { el: '.listings-pagination', clickable: true },
      navigation: { nextEl: '.listings-next', prevEl: '.listings-prev' }
    });

    new Swiper('.units-swiper', {
      ...commonOpts,
      pagination: { el: '.units-pagination', clickable: true },
      navigation: { nextEl: '.units-next', prevEl: '.units-prev' }
    });
  }

  // ----------------------------
  // Image Modal Functionality
  // ----------------------------
  const imageModal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionEl = document.getElementById("caption");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let modalIndex = 0;
  let modalImages = [];

  window.openImageModal = function (srcArray, index = 0) {
    if (!srcArray.length) return;
    modalImages = srcArray;
    modalIndex = index;
    modalImg.src = modalImages[modalIndex];
    captionEl.textContent = "";
    imageModal.style.display = "block";

    prevBtn.style.display = modalImages.length > 1 ? "block" : "none";
    nextBtn.style.display = modalImages.length > 1 ? "block" : "none";
  };

  window.closeModal = () => imageModal.style.display = "none";
  window.nextImage = () => {
    modalIndex = (modalIndex + 1) % modalImages.length;
    modalImg.src = modalImages[modalIndex];
  };
  window.prevImage = () => {
    modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    modalImg.src = modalImages[modalIndex];
  };

  imageModal.addEventListener('click', e => {
    if (e.target === imageModal) closeModal();
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
