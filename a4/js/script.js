// Individual field validation functions
function validateFirstName() {
    var valid = true;
    var firstname = document.getElementById("firstname")
        .value.trim();
    if (firstname === "" || firstname.length > 20 || !/^[A-Za-z]+$/.test(firstname)) {
        document.getElementById("firstnameError")
            .innerHTML = "First name is required, must be alphabetical, and no longer than 20 characters.";
        valid = false;
    } else {
        document.getElementById("firstnameError")
            .innerHTML = "";
    }
    return valid;
}

function validateLastName() {
    var valid = true;
    var lastname = document.getElementById("lastname")
        .value.trim();
    if (lastname === "" || lastname.length > 20 || !/^[A-Za-z]+$/.test(lastname)) {
        document.getElementById("lastnameError")
            .innerHTML = "Last name is required, must be alphabetical, and no longer than 20 characters.";
        valid = false;
    } else {
        document.getElementById("lastnameError")
            .innerHTML = "";
    }
    return valid;
}

function validateEmail() {
    var valid = true;
    var userEmail = document.getElementById("email")
        .value.trim();
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (userEmail === "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        document.getElementById("emailError")
            .innerHTML = "Please enter a valid email address.";
        valid = false;
    } else {
        document.getElementById("emailError")
            .innerHTML = "";
    }
    return valid;
}

function validatePhone() {
    var valid = true;
    var phone = document.getElementById("phone")
        .value.trim();
    var phoneDigits = phone.replace(/-/g, "");
    if (phone === "" || isNaN(phoneDigits) || phoneDigits.length > 15) {
        document.getElementById("phoneError")
            .innerHTML = "Please enter a valid phone number (numeric, up to 15 digits).";
        valid = false;
    } else {
        document.getElementById("phoneError")
            .innerHTML = "";
    }
    return valid;
}

function validateUsername() {
    var valid = true;
    var username = document.getElementById("username")
        .value.trim();
    if (username === "" || username.length > 12) {
        document.getElementById("usernameError")
            .innerHTML = "Username is required and must be no longer than 12 characters.";
        valid = false;
    } else {
        document.getElementById("usernameError")
            .innerHTML = "";
    }
    return valid;
}

function validatePassword() {
    var valid = true;
    var password = document.getElementById("password")
        .value;
    if (password === "" || password.length > 7 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
        document.getElementById("passwordError")
            .innerHTML = "Password is required, must be no longer than 7 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        valid = false;
    } else {
        document.getElementById("passwordError")
            .innerHTML = "";
    }
    return valid;
}

function validateAddress() {
    var valid = true;
    var address = document.getElementById("address")
        .value.trim();
    if (address === "") {
        document.getElementById("addressError")
            .innerHTML = "Address is required.";
        valid = false;
    } else {
        document.getElementById("addressError")
            .innerHTML = "";
    }
    return valid;
}

function validateCity() {
    var valid = true;
    var city = document.getElementById("city")
        .value.trim();
    if (city === "") {
        document.getElementById("cityError")
            .innerHTML = "City is required.";
        valid = false;
    } else {
        document.getElementById("cityError")
            .innerHTML = "";
    }
    return valid;
}

function validateState() {
    var valid = true;
    var state = document.getElementById("state")
        .value;
    if (state === "") {
        document.getElementById("stateError")
            .innerHTML = "State is required.";
        valid = false;
    } else {
        document.getElementById("stateError")
            .innerHTML = "";
    }
    return valid;
}

function validateCountry() {
    var valid = true;
    var country = document.getElementById("country")
        .value;
    if (country === "") {
        document.getElementById("countryError")
            .innerHTML = "Country is required.";
        valid = false;
    } else {
        document.getElementById("countryError")
            .innerHTML = "";
    }
    return valid;
}

function validateZipcode() {
    var valid = true;
    var country = document.getElementById("country")
        .value;
    var zipcode = document.getElementById("zipcode")
        .value.trim();
    // Only validate zipcode if the country is USA
    if (country === "USA") {
        if (zipcode === "" || zipcode.length > 5 || !/^\d+$/.test(zipcode)) {
            document.getElementById("zipcodeError")
                .innerHTML = "For USA, the Zip Code is required and must be a maximum of 5 digits.";
            valid = false;
        } else {
            document.getElementById("zipcodeError")
                .innerHTML = "";
        }
    } else {
        // Clear error message if not applicable
        document.getElementById("zipcodeError")
            .innerHTML = "";
    }
    return valid;
}

// Main form validation function
function validateForm() {
    var valid = true;
    // Call all individual validation functions and combine the result
    if (!validateFirstName()) valid = false;
    if (!validateLastName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateUsername()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateAddress()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateCountry()) valid = false;
    if (!validateZipcode()) valid = false;
    
    return valid;
}

// Attach blur event listeners to each field so errors show immediately when the field loses focus
document.getElementById("firstname")
    .addEventListener("blur", validateFirstName, false);
document.getElementById("lastname")
    .addEventListener("blur", validateLastName, false);
document.getElementById("email")
    .addEventListener("blur", validateEmail, false);
document.getElementById("phone")
    .addEventListener("blur", validatePhone, false);
document.getElementById("username")
    .addEventListener("blur", validateUsername, false);
document.getElementById("password")
    .addEventListener("blur", validatePassword, false);
document.getElementById("address")
    .addEventListener("blur", validateAddress, false);
document.getElementById("city")
    .addEventListener("blur", validateCity, false);
document.getElementById("state")
    .addEventListener("blur", validateState, false);
document.getElementById("country")
    .addEventListener("blur", validateCountry, false);
document.getElementById("zipcode")
    .addEventListener("blur", validateZipcode, false);
