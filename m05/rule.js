var table = parseInt(prompt("Enter a number for the multiplication table:")); // Get user input
var operator = 'multiplication'; // Type of calculation
var i = 1; // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
