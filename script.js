// Assignment code here, first lets define some variables
var stringCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var stringNum = "0123456789";
var stringSymbol = "!@#$%^&*()";
var charList = "";
var length = 0;


// my plan is to get a password length from the user, then ask a series of questions about what type of characters to use, 
// I will then concatenate the corresponding strings into variable charlist and generate random numbers to choose characters from charList

function generatePassword() {
  length = window.prompt("How long is your password? Enter a number from 8 - 128")
  console.log(length);
  if (length > 7 && length < 129) {
    // I moved all my if/else to generate a charlist into the following function
    generateCharList();
  }
  else if (length < 8 || length > 128) {
    window.alert("Sorry, but you must choose a length between 8 and 128.  Feel free to try again!");
  }

  charList = "";
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateCharList() {
  var choice = window.prompt("Do you want to include capitol letters? (Y/N)");
  if (choice === "Y" || choice === "y") {
    console.log("woohoo!");
    charList = charList.concat(stringCaps);
    choice = "";
    console.log(charList);
  }
  else if (choice === "N" || choice === "n") {
    charList = charList;
    console.log("boohoo!");
    choice = "";
    console.log(charList);
  }
  choice = window.prompt("Do you want to include lowercase letters? (Y/N)");
  if (choice === "y" || choice === "Y") {
    console.log("alright then");
    charList = charList.concat(stringLower);
    console.log(charList);
    choice = "";
  } else if (choice === "N" || choice === "n") {
    charList = charList;
    choice = "";
    console.log(charList);
  }
  choice = window.prompt("Do you want to include numbers? (Y/N");
  if (choice === "Y" || choice === "y") {
    console.log("numbers!");
    charList = charList.concat(stringNum);
    choice = "";
    console.log(charList);
  }
  else if (choice === "N" || choice === "n") {
    charList = charList;
    console.log("boohoo!");
    choice = "";
    console.log(charList);
  }
  choice = window.prompt("Do you want to include special characters? (Y/N)");
  if (choice === "Y" || choice === "y") {
    console.log("woohoo!");
    charList = charList.concat(stringSymbol);
    choice = "";
    console.log(charList);
  }
  else if (choice === "N" || choice === "n") {
    charList = charList;
    console.log("boohoo!");
    choice = "";
    console.log(charList);
  }
  //start writing code to change charList into an array
  let arrChoice = charList.split("");
  console.log(arrChoice);
  //this seems to work.  now to make a loop that will choose randomly from the array and give us a password
  for (i=1; i<length; i++) {
    var piece = Math.floor(Math.random() * arrChoice.length);
    console.log(piece);
  };


  //I see in the console log that the charList is retaining value each time I run through the code so far, so I'm going to set it back to null after the function
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);