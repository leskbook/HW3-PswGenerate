// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating a function for generating the password
function generatePassword() {
    var passwordString = "";

    //User input prompts//
    var useNumeric = prompt("Include numbers?")
    var useLowerCase = prompt("Include lowercase characters?")
    var useUpperCase = prompt("Include uppercase characters?")
    var useSpecial = prompt("Include special characters?")


    //Check validity of variables entered
    if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecial === false) {
        alert("Try again! Please select one type of character");
        useNumeric = confirm("Do you want to include numeric characters?");
        useLowerCase = confirm("Do you want to include lowercase characters?");
        useUpperCase = confirm("Do you want to include uppercase characters?");
        useSpecial = confirm("Do you want to include special characters?");
    }

    // Check password length must be at least 8 characters but can be up to 128
    var passwordLength = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters."));
    if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Try again! Choose a number between 8 and 128 characters");
        passwordLength = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters."));
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;
        var caseArray
    }
    randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray));
    selectedCharArray = caseArray[randomCharArrayNum];
    randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
    randomChar = selectedCharArray[randomCharNum];
    passwordString += randomChar;
    passwordEntry.textContent = passwordString;
}
var generateButton = document.getElementById("generatePassword");
var passwordEntry = document.getElementById("passwordEntry");
//generateButton.onclick = generatePassword;