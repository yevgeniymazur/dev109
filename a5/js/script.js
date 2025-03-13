// Array of image objects, each with a src, alt, and description
const images = [
  {
    src: "images/img1.png",
    alt: "Thunderstorm weather over a city",
    description: "A Thunderstorm over a city with heavy winds and rain, The city is in darkness."
  },
  {
    src: "images/img2.png",
    alt: "Floating In the clouds",
    description: "Nothing but sky and clouds."
  },
  {
    src: "images/img3.png",
    alt: "Lightning striking the ocean",
    description: "A storm engulfing the ocean, lightning, and rain with heavy winds."
  },
  {
    src: "images/img4.png",
    alt: "A panoramic view of a ocean",
    description: "A sweeping panoramic view of a vast ocean with rolling waves and a blue sky with clouds hugging the sun."
  },
  {
    src: "images/img5.png",
    alt: "A calm morning joungle with fog in the valleys",
    description: "A tranquil jungle scene with soft white fog in the valleys, perfect for relaxation."
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
