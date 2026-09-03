document.querySelectorAll('.imageCarousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-track img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dots = carousel.querySelectorAll('.dot');

    if (!track || !images.length || !prevBtn || !nextBtn) {
        return;
    }

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            index = dotIndex;
            updateCarousel();
        });
    });

    setInterval(() => {
        index = (index + 1) % images.length;
        updateCarousel();  
    }, 10000);
});

function copyText() {
  const inputElement = document.getElementById("textToCopy");
  const popup = document.getElementById("popup");

  try {
    // Copy text to clipboard
    await navigator.clipboard.writeText(inputElement.value);

    // Show the popup
    popup.classList.add("show");

    // Hide the popup after 1.5 seconds (1500 milliseconds)
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
    
  } catch (err) {
    return;
  }
}

