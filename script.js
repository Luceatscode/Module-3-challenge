var generateBtn = document.querySelector("#generate")

{/* // Write password to the #password input */ }
function writePassword() {
  var passwordText = document.querySelector("#password");

  // First prompt validating the length of password
  var lengthPrompt;
  for (var x = lengthPrompt; lengthPrompt === undefined || lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt); x++) {
    // re prompt user if a non integer is selected for the password length 
    lengthPrompt = prompt("How many characters would you like your new password to be, please choose a number between 8 and 128?")
  }

  // Second prompt validating the lowercase in password
  var lowerCasePrompt;
  for (var y = lowerCasePrompt; lowerCasePrompt === undefined || (lowerCasePrompt !== "Yes" && lowerCasePrompt !== "No"); y++) {
    lowerCasePrompt = prompt("Would you like your password to include lowercase letter, please answer Yes or No?")
  }

  // Third prompt validating uppercase
  var upperCasePrompt;
  for (var z = upperCasePrompt; upperCasePrompt === undefined || (upperCasePrompt !== "Yes" && upperCasePrompt !== "No"); z++) {
    upperCasePrompt = prompt("Would you like your password to include uppercase letter, please answer Yes or No?")
  }

  // Fourth prompt validating number
  var numberPrompt;
  for (var a = numberPrompt; numberPrompt === undefined || (numberPrompt !== "Yes" && numberPrompt !== "No"); a++) {
    numberPrompt = prompt("Would you like your password to include numbers, please answer Yes or No?")
  }

  // Fifth special character prompt & validation here
  var specialCharactersPrompt;
  for (var c = specialCharactersPrompt; specialCharactersPrompt === undefined || (specialCharactersPrompt !== "Yes" && specialCharactersPrompt !== "No"); c++) {
    specialCharactersPrompt = prompt("Would you like your password to include special characters, please answer Yes or No?")
  }

  
  function generatePassword() {
    var finalPassword = ''
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const integerCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()';

    // Found this code here
    // https://www.programiz.com/javascript/examples/generate-random-strings
    for (var b = 0; finalPassword.length < lengthPrompt; b++) {
      var allCharacters = '';

      if (lowerCasePrompt === "Yes") {
        allCharacters = allCharacters.concat(lowercaseCharacters)
      }

      if (upperCasePrompt === "Yes") {
        allCharacters = allCharacters.concat(uppercaseCharacters)
      }

      if (numberPrompt === "Yes") {
        allCharacters = allCharacters.concat(integerCharacters)
      }

      if (specialCharactersPrompt === "Yes") {
        allCharacters = allCharacters.concat(specialCharacters)
      }

      finalPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    return `${finalPassword}`
  }

  var password = generatePassword();
  const textarea = document.getElementById("password")
  textarea.nodeValue = password
  textarea.innerHTML = password
}

generateBtn.addEventListener("click", writePassword)

