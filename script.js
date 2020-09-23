// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterSelect = prompt("How many characters do you need your password to be?");

while (characterSelect <8 || characterSelect > 128) {
    alert("Please choose a value between 8 and 128");
    var characterSelect = prompt("How many characters do you need your password to be?");
}

var uppercase = confirm("Does your password require at least one Uppercase Letter?");
var lowercase = confirm("Does your password require at least one Lowercase letter?");
var number = confirm("Does your password require at least one Number?");
var specialChar = confirm("Does your password require at least one Special Character?");

while (uppercase === false && lowercase === false && number === false && specialChar === false) {
    alert("Please select at least one of the following: Uppercase, Lowercase, Number, Special Character");
    var uppercase = confirm("Does your password require at least one Uppercase Letter?");
    var lowercase = confirm("Does your password require at least one Lowercase letter?");
    var number = confirm("Does your password require at least one Number?");
    var specialChar = confirm("Does your password require at least one Special Character?");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
