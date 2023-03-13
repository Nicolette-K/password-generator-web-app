// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  console.log(password);

  if (password === undefined){
    passwordText.value = "";
  }else{
  passwordText.value = password;
  selectPassword();
  };

  // Function to select Generated Password for easy copying
  function selectPassword() {
    var copyText = passwordText;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    window.alert("Congratulations! A Random password has been created!\n\nPassword generated is: " + password + "\n\nHave a great day!");
  };  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Random Password Wizard - Begin
// Introductory prompt
function generatePassword(){
  window.alert("Welcome to the Randomized Password Generator\n\nThis wizard will guide you through a set of instructions to generate a random password.\n\nClick OK to continue.");


// Password length prompt with validations
  var invalidPassword = true;
  while (invalidPassword){
    var passwordLength = Number(window.prompt("Type in the number of characters the password should be.\nNote: Input must be between 8 and 128 characters", "Password Length Input"));
    console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128){
      invalidPassword = false;
    } else if(passwordLength === 0){
      window.alert("Exiting Random Password Generator. Have a great day!");
      return;
    } else {
      window.alert("Invalid input. Please make sure character length is between 8 and 128 characters. Please try again.");
    };
  };
  window.alert("Password length chosen is " + passwordLength + " characters. Click OK to continue to the next step.");
  window.alert("Please answer the following prompts to select the contents of the password.\n\nNote: At least one option must be selected.");

  //Password character content selection prompts
  while (!invalidPassword) {
    var lowerCase = window.confirm("Should the password contain lowercase letters?\nClick OK to confirm or click cancel to decline.");
    var upperCase = window.confirm("Should the password contain uppercase letters?\nClick OK to confirm or click cancel to decline.");
    var numeric = window.confirm("Should the password contain numbers?\nClick OK to confirm or click cancel to decline.");
    var special = window.confirm("Should the password contain special characters?\nClick OK to confirm or click cancel to decline.");
    window.alert("You chose: \n Lowercase Letters: " + lowerCase + "\n Uppercase Letters: " + upperCase + "\n Numbers: " + numeric + "\n Special Characters: " + special + "\n Your password length: " + passwordLength + " characters.");
    if (lowerCase == true || upperCase == true || numeric == true || special == true) {
      invalidPassword = true;
    } else {
      window.alert("Invalid selection. At least one option must be selected. Please try again.");
    };
  };

  // Assigning character options based on selections made in above loop
  if (lowerCase === true){
    lowerCase = "abcdefghijklmnopqrstuvwxyz"
  } else {
    lowerCase = ""
  }; 
  if (upperCase === true) 
  {upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    upperCase = ""
  }; 
  if (numeric === true) {
    numeric = "1234567890"
  } else {
    numeric = ""
  }; 
  if (special === true) {
    special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  } else {
    special = ""
  };

  // Combine character selections into one string
  var finalPassword = lowerCase + upperCase + numeric + special;

  // Use Math object to randomize password string
  var randomPassword = "";
  for (var i = 0; i <passwordLength; i++) {
    randomPassword += finalPassword [Math.floor(Math.random() * finalPassword.length)];
  };
  return randomPassword;
};
