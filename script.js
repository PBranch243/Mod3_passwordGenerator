// Assignment code here, first lets define some variables
var stringCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var stringNum = "0123456789";
var stringSymbol = "!@#$%^&*()";
var charList = "";



// my plan is to get a password length from the user, then ask a series of questions about what type of characters to use, 
// I will then concatenate the corresponding strings into variable charlist and generate random numbers to choose characters from charList

function generatePassword() {
  var length = window.prompt("How long is your password? Enter a number from 8 - 128")
  console.log(length);
  if (length > 7 && length < 129) {
    var choice = window.prompt("Do you want to include capitol letters? (Y/N)");
    if (choice === "Y" || choice === "y") {
      console.log("woohoo!");
      charList = charList.concat(stringCaps);
    }
    else if (choice === "N" || choice === "n") {
      charList = charList;
      console.log("boohoo!");
    }
  }
  else if(length<8 || length>128) {
    window.alert("Sorry, but you must choose a length between 8 and 128.  Feel free to try again!");

  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);