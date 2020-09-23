// Assignment Code
var generateBtn = document.querySelector("#generate");

var charPool = [];
var ua = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var la = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var na = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var sca = ['!', '@', '#', '$', '%', '&', '?'];
var characterSelect = prompt("How many characters do you need your password to be?");
    console.log(characterSelect);

while (characterSelect <8 || characterSelect > 128) {
    alert("Please choose a value between 8 and 128");
    var characterSelect = prompt("How many characters do you need your password to be?");
}

var uppercase = confirm("Does your password require at least one Uppercase Letter?");
if (uppercase) {
   var charPool = charPool.concat(ua);
   console.log(charPool);
}
var lowercase = confirm("Does your password require at least one Lowercase letter?");
if (lowercase) {
    var charPool = charPool.concat(la);
    console.log(charPool);
}
var number = confirm("Does your password require at least one Number?");
if (number) {
    var charPool = charPool.concat(na);
    console.log(charPool);
}
var specialChar = confirm("Does your password require at least one Special Character?");
if (specialChar) {
    var charPool = charPool.concat(sca);
    console.log(charPool);
}

while (uppercase === false && lowercase === false && number === false && specialChar === false) {
    alert("Please select at least one of the following: Uppercase, Lowercase, Number, Special Character");
    var uppercase = confirm("Does your password require at least one Uppercase Letter?");
    var lowercase = confirm("Does your password require at least one Lowercase letter?");
    var number = confirm("Does your password require at least one Number?");
    var specialChar = confirm("Does your password require at least one Special Character?");
}






function generatePassword() {
    for (var i = 0; i < characterSelect; i++) {
        var result = [Math.floor(Math.random() * charPool.length)];
        console.log(result);
        }
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  