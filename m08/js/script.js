function addItem() {
  // Retrieve the value from the text box.
  var input = document.getElementById('newItem');
  var newItemText = input.value;

  // Only add the item if the input is not empty.
  if (newItemText.trim() !== "") {
    // Create a new list item element.
    var newEl = document.createElement('li');
    // Create a text node with the user's input.
    var newText = document.createTextNode(newItemText);
    // Attach the text node to the new list item.
    newEl.appendChild(newText);
    // Find the <ul> element where new items should be added.
    var list = document.getElementById('todo');
    // Append the new list item to the unordered list.
    list.appendChild(newEl);
    // Clear the input field after adding the item.
    input.value = "";
  } else {
    alert("Please enter an item!");
  }
}

// Listen for the Enter/Return key on the input field.
document.getElementById('newItem').addEventListener('keydown', function(event) {
  // Check if the key pressed is "Enter/Return" 
  if (event.key === "Enter") {
    addItem();
  }
});
