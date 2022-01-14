let randomSelector = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// possible characters
let charPool = {
  lowCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
};

let lengthCharacters = function () {
  let promptLength = prompt("Password Length? min 8 - max 128?");

  // Loop if answer is outside the parameters
  if (promptLength <= 7 || promptLength >= 129) {
    alert(promptLength + " Invalid! Only numbers between 8 and 128.");
    return lengthCharacters();
  }

  if (isNaN(promptLength)) {
    alert(promptLength + " Invalid input! Only numbers between 8 and 128.");
    return lengthCharacters();
  } else {
    alert("Password with " + promptLength + " characters.");
  }
  return promptLength;
};

let selectParameters = function () {
  // select the parameters
  // alert("Password with " + promptLength + " characters.");
  let askParameters = {
    askLowCase: confirm("Include Lower Case?"),
    askUpperCase: confirm("Include Upper Case?"),
    askNumeric: confirm("Include Numbers?"),
    askSymbol: confirm("Include Symbols?"),
  };

  // this checks if user selected at least 1 parameter
  if (askParameters.askLowCase === false && askParameters.askUpperCase === false && askParameters.askNumeric === false && askParameters.askSymbol === false) {
    alert("Invalid! At least one parameter must be selected.");
    return selectParameters();
  }
  console.log(askParameters);

  // array of possible chars
  // This is an accumulator variable
  let passCharacters = []; //THIS IS AN ARRAY (empty)

  if (askParameters.askLowCase) {
    passCharacters = passCharacters.concat(charPool.lowCase); //concat = concatenate.  This mean to join stuff together
  }

  if (askParameters.askUpperCase) {
    passCharacters = passCharacters.concat(charPool.upCase); //concat = concatenate.  This mean to join stuff together
  }

  if (askParameters.askNumeric) {
    passCharacters = passCharacters.concat(charPool.numbers);
  }

  if (askParameters.askSymbol) {
    passCharacters = passCharacters.concat(charPool.symbols);
  }

  // all the chars
  return passCharacters;
};

let generatePassword = function () {
  let promptLength = lengthCharacters();
  promptLength = parseInt(promptLength);
  console.log(promptLength);

  let passCharacters = selectParameters();

  let randomPassword = ""; //THIS IS A STRING

  for (let i = 0; i < promptLength; i++) {
    // each time this loop runs, I am adding a random character to the randomPassword variable. randomPassword is a string
    randomPassword = randomPassword + passCharacters[Math.floor(Math.random() * passCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
};

// Write password to the #password input
let getPassword = function () {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

let generateBtn = document.querySelector("#generate");

// Add event listener to generate button, callback the function when clicked
generateBtn.addEventListener("click", getPassword);

// copy the password to clipboard
let copyPassword = function () {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
};

let copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

// // THESE ARE ALL DIFFERENT DATATYPES
// let myString = ""; // mystring = 'abcdefg'
// let myNumber = 0; // myNumber = 100;
// let myArray = []; // myArray = ['1', 1, 'a', 100]    //THIS IS A LIST
// let myObject = {}; // myObject = { "a": [1,2,3,4,5]  }   //Think of this like a dictionary
// console.log(myObject["a"]); // [1,2,3,4,5]
