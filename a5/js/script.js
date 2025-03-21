// Array of image objects, each with a src, alt, and description
const images = [
  {
    src: "images/img1.png",
    alt: "Thunderstorm weather over a city",
    description: "A Thunderstorm over a city with heavy winds and rain, The city is in darkness."
  },
  {
    src: "images/img2.png",
    alt: "Floating in the clouds",
    description: "Nothing but sky and clouds."
  },
  {
    src: "images/img3.png",
    alt: "Lightning striking the ocean",
    description: "A storm engulfing the ocean, lightning, and rain with heavy winds."
  },
  {
    src: "images/img4.png",
    alt: "A panoramic view of an ocean",
    description: "A sweeping panoramic view of a vast ocean with rolling waves and a blue sky with clouds hugging the sun."
  },
  {
    src: "images/img5.png",
    alt: "A calm morning jungle with fog in the valleys",
    description: "A tranquil jungle scene with soft white fog in the valleys, perfect for relaxation."
  }
];

let currentIndex = 0;
const timerDuration = 4; // seconds
let timerIntervalId;
let remainingTime = timerDuration;
let autoAdvanceEnabled = true;

// Get references to DOM elements
const imgElement = document.getElementById('carousel-image');
const descElement = document.getElementById('description');
const timerElement = document.getElementById('timer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const toggleAutoBtn = document.getElementById('toggleAuto');

// Function to update image and description based on currentIndex
function updateCarousel() {
  const currentImage = images[currentIndex];
  imgElement.src = currentImage.src;
  imgElement.alt = currentImage.alt;
  descElement.textContent = currentImage.description;
}

// Manual navigation: show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  resetTimer();
}

// Manual navigation: show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  resetTimer();
}

// Reset the countdown timer
function resetTimer() {
  remainingTime = timerDuration;
  timerElement.textContent = remainingTime;
}

// Start the auto advance interval (timer and image cycling)
function startAutoAdvance() {
  resetTimer();
  autoAdvanceEnabled = true;
  toggleAutoBtn.textContent = "Pause";
  timerIntervalId = setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
      remainingTime = timerDuration;
    }
    timerElement.textContent = remainingTime;
  }, 1000);
}

// Stop the auto advance interval
function stopAutoAdvance() {
  autoAdvanceEnabled = false;
  toggleAutoBtn.textContent = "Play";
  clearInterval(timerIntervalId);
}

// Toggle auto advance on/off when button is clicked
toggleAutoBtn.addEventListener('click', () => {
  if (autoAdvanceEnabled) {
    stopAutoAdvance();
  } else {
    startAutoAdvance();
  }
});

// Attach event listeners to the navigation buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Start the carousel when the window loads
window.onload = () => {
  updateCarousel(); // Show the first image immediately
  timerElement.textContent = timerDuration;
  startAutoAdvance();
};


