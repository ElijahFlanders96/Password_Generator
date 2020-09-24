// Assignment Code
var generateBtn = document.querySelector("#generate");


var characterSelect = prompt("How many characters do you need your password to be?");
    console.log(characterSelect);

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


function generatePassword() {
    var charPool = [];
    var together = [];
    var ua = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var la = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var na = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var sca = ['!', '@', '#', '$', '%', '&', '?'];
    if (uppercase) {
        charPool = charPool.concat(ua);
        console.log(charPool);
     }
     if (lowercase) {
        charPool = charPool.concat(la);
        console.log(charPool);
    }
    if (number) {
        charPool = charPool.concat(na);
        console.log(charPool);
    }
    if (specialChar) {
        charPool = charPool.concat(sca);
        console.log(charPool);
    }
    for (var i = 0; i < characterSelect; i++) {
        var result = Math.floor(Math.random() * charPool.length);
        console.log(result);
        together.push(charPool[result]);
        console.log(together);
        }
    return together.join('');
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password);
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  