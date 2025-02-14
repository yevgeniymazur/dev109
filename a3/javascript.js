// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "";
  for (i = 1; i <= pHeight; i++){
    rLine += "<p>";
    
    // Fill in the left side of every row
    for (x = 1; x <= pHeight - i; x++){
      rLine += "<span class='space'>" + pSymbol + "</span>";
    }
    
    // Create each line on the Rhombus
    for (j = x; j <= pHeight; j++){
      // Is the position even or odd so we change the color
      if (j % 2)
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
  }
  
  document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "";
  for (i = 0; i <= pHeight; i++){
    rLine += "<p>";
    // Create each line on the Rhombus
    for (j = 0; j < i; j++){
      // Is the position even or odd so we change the color
      if (j % 2)
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
  }
  
  document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  rLine = "";
  for (i = pHeight; i >= 1; i--){
    rLine += "<p>";
    
    // Add left padding: (pHeight - i) space spans
    for (x = 1; x <= pHeight - i; x++){
      rLine += "<span class='space'>" + pSymbol + "</span>";
    }
    
    // Print the row's symbols (i symbols)
    for (j = 1; j <= i; j++){
      if (j % 2)
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    
    rLine += "</p>";
  }
  
  document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  rLine = "";
  for (i = pHeight; i > 0; i--){
    rLine += "<p>";
    
    // No left padding here; symbols are printed from the left
    for (j = 0; j < i; j++){
      if (j % 2)
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    
    rLine += "</p>";
  }
  
  document.getElementById("downRight").innerHTML = rLine;
}

// Slider code for live updates
document.getElementById('rHeightRange').addEventListener('input', function() {
  var newSize = this.value;
  document.getElementById('rhombusSizeDisplay').innerText = newSize;
  createRhombus(
    newSize,
    document.getElementById('colorEven').value,
    document.getElementById('colorOdd').value,
    document.getElementById('symbol').value
  );
});
