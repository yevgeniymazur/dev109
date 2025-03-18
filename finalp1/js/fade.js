document.addEventListener('DOMContentLoaded', function() {
  // Select all artifact slides
  const artifacts = document.querySelectorAll('.artifact');
  
  // Use Intersection Observer to add fade-in effect when a slide is mostly in view
  const options = {
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, options);

  // Observe each artifact slide
  artifacts.forEach(artifact => {
    observer.observe(artifact);
  });
});
