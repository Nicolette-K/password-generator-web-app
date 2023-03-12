// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Random Password Wizard - Begin
// Introductory prompt
function generatePassword(){
  window.alert("Welcome to the Randomized Password Generator\n\nThis wizard will guide you through a set of instructions to generate a random password.\n\nClick Next to continue.")
}

// Password length prompt with validations
var invalidPassword = true;
while (invalidPassword){
  var passwordLength = Number(window.prompt("Type in the number of characters the password should be.\nNote: Input must be between 8 and 128 characters", "Password Length Input"));
  if (passwordLength >= 8 && passwordLength <= 128){
    invalidPassword = false;
  } else {
    window.alert("Invalid input. Please make sure character length is between 8 and 128 characters. Please try again.");
  }
}
window.alert("Password length chosen is " + passwordLength + " characters. Click OK to continue to the next step.");