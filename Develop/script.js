// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var resultArray = [];
  var userArray = [];

  //------------------

  var numCharacter = prompt ("How many characters for your password? (between 8-128)");
  var numbers = confirm ("Do you need numbers in your password?");
  var uppercases = confirm ("Do you need Uppercase letters in your password?");
  var lowercases = confirm ("Do you need lowercases letters in your password?");
  var characters = confirm ("Do you need special characters in your password?");

if (numbers){
  resultArray = resultArray.concat(numArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(charArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);