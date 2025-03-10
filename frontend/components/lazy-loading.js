document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".listing img");
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Load actual image
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  
    // Ensure modal images are loaded correctly
    document.addEventListener("listing-modal-opened", (event) => {
      const modalImg = event.detail.querySelector("img");
      if (modalImg) {
        modalImg.src = modalImg.dataset.src;
        modalImg.classList.add("loaded");
      }
    });
  });  