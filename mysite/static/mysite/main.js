
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('positionFixed');
  } else {
    header.classList.remove('positionFixed');
  }
});

const menuicon = document.querySelector(".menu-icon")

menuicon.addEventListener("click", ()=>{
    const navLinks = document.querySelector(".nav-links")

    navLinks.classList.toggle("show")
})

function handleAnimationScroll() {
    // This block of code handles the reveal animation for elements on scroll
    window.addEventListener("scroll", () => {
      const targetElements = document.querySelectorAll(".element");

      targetElements.forEach((element) => {
        const position = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.65;

        // If the element's position is within the threshold, reveal it and trigger animation
        if (position.top <= threshold) {
          element.classList.add("slides");
        }
      });
    });
  }
  handleAnimationScroll();

  const images = document.querySelectorAll('.gallery-container img');
    const modal = document.getElementById('myModal');
    const modalImg = document.querySelector('.modal-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const imageCounter = document.querySelector('.modal-image-counter');
    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openModal(img.src);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    function openModal(src) {
        modal.style.display = 'block';
        modalImg.src = src;
        updateImageCounter();
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        updateImageCounter();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        updateImageCounter();
    }

    function updateImageCounter() {
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
















