// Prevent clicks on the control panel from drawing a dot.
document.getElementById('dotForm').addEventListener('click', function(e) {
  e.stopPropagation();
});

// Clean the screen by removing all dots.
document.getElementById('cleanBtn').addEventListener('click', function(e) {
  var dots = document.querySelectorAll('.dot');
  dots.forEach(function(dot) {
    dot.parentNode.removeChild(dot);
  });
  // Prevent the clean click from creating a dot.
  e.stopPropagation();
});

// Listen for click events on the document to create dots.
document.addEventListener('click', function(event) {
  // Create a new dot element.
  var dot = document.createElement('div');
  dot.className = 'dot';
  
  // Get the selected color and size.
  var color = document.getElementById('dotColor').value;
  var size = parseInt(document.getElementById('dotSize').value) || 8;
  
  // Set dot style based on the selections.
  dot.style.background = color;
  dot.style.width = size + 'px';
  dot.style.height = size + 'px';
  
  // Position the dot at the click location, centering it.
  dot.style.left = (event.pageX - size / 2) + 'px';
  dot.style.top = (event.pageY - size / 2) + 'px';
  
  document.body.appendChild(dot);
});
