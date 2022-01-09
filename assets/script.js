let randomSelector = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// possible characters
let charPool = {
  lowCase: "abcdefghijklmnopqrstuvwxyz",
  upCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "`~!@#$%^&*()_-+={}[]\\|:;\"'<>,.?/",
};

function generatePassword() {
  let promptLength = window.prompt("Password Length? min 8 - max 128?");

  // loop when < 8 or > 128
  while (promptLength <= 7 || promptLength >= 129) {
    window.alert(
      "Invalid! " +
        promptLength +
        " , isn't a number between 8 and 128! Try again."
    );
    return generatePassword();
  }

  window.alert("Password with " + promptLength + " characters.");
  let askParameters = {
    askLowCase: window.confirm("Include Lower Case?"),
    askUpperCase: window.confirm("Include Upper Case?"),
    askNumeric: window.confirm("Include Upper Case?"),
    askSymbol: window.confirm("Include Symbols?"),
  };

  while (
    askParameters.askLowCase === false &&
    askParameters.askUpperCase === false &&
    askParameters.askNumeric === false &&
    askParameters.askSymbol === false
  ) {
    window.alert("Invalid! At least one parameter must be selected.");
    return generatePassword();
  }
}
generatePassword();

// Assignment code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getPassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPassword);
