// Array of image objects, each with a src, alt, and description
const images = [
  {
    src: "img1.jpg",
    alt: "A serene landscape with mountains and a lake",
    description: "A serene landscape showing snow-capped mountains reflected in a crystal clear lake during sunrise."
  },
  {
    src: "img2.jpg",
    alt: "A bustling cityscape at night",
    description: "A vibrant cityscape with skyscrapers lit up against the night sky and busy streets."
  },
  {
    src: "img3.jpg",
    alt: "A close-up of a blooming flower",
    description: "An intricate close-up of a blooming flower showcasing its vibrant colors and delicate petals."
  },
  {
    src: "img4.jpg",
    alt: "A panoramic view of a desert",
    description: "A sweeping panoramic view of a vast desert with rolling sand dunes and a clear blue sky."
  },
  {
    src: "img5.jpg",
    alt: "A calm beach with turquoise water",
    description: "A tranquil beach scene with soft white sand and clear turquoise waters, perfect for relaxation."
  }
];

let currentIndex = 0;
const timerDuration = 4; // seconds
let intervalId;
let timerIntervalId;
let remainingTime = timerDuration;

// Get references to DOM elements
const imgElement = document.getElementById('carousel-image');
const descElement = document.getElementById('description');
const timerElement = document.getElementById('timer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update image and description based on currentIndex
function updateCarousel() {
  const currentImage = images[currentIndex];
  imgElement.src = currentImage.src;
  imgElement.alt = currentImage.alt;
  descElement.textContent = currentImage.description;
}

// Reset the timer whenever user manually navigates
function resetTimer() {
  clearInterval(intervalId);
  clearInterval(timerIntervalId);
  remainingTime = timerDuration;
  timerElement.textContent = remainingTime;
  startCarousel();
}

// Show the next image and loop back to the start if at the end
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  resetTimer();
}

// Show the previous image and loop to the end if at the start
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  resetTimer();
}

// Attach event listeners to the buttons using JavaScript
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Start automatic cycling of the carousel and update timer countdown
function startCarousel() {
  intervalId = setInterval(showNextImage, timerDuration * 1000);
  timerIntervalId = setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
      remainingTime = timerDuration;
    }
    timerElement.textContent = remainingTime;
  }, 1000);
}

// Start the carousel when the window loads
window.onload = startCarousel;
