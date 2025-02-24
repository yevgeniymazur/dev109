// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

// Create three hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);

// Update the HTML for the page

// Hotel 1 details
var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

// Hotel 2 details
var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

// Hotel 3 details
var details3 = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

/* 
NOTE: textContent does not work in IE8 or earlier.
If you need to support those browsers, you can use innerHTML,
but be mindful of potential security issues.
*/
