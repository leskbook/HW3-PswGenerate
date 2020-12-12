// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating a function for generating the password
function generatePassword() {
    var passwordString = "";

    //User input prompts//
    var passwordLength = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters."));
    var useNumeric = alert("Click okay to include numbers")
    var useLowerCase = alert("Click okay to include lowercase characters")
    var useUpperCase = alert("Click okay to include uppercase characters")
    var useSpecial = alert("Click okay to include special characters")

    //Check validity of variables entered
    if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecial === false) {
        alert("Try again! Please select one type of character");
        useNumeric = confirm("Do you want to include numeric characters?");
        useLowerCase = confirm("Do you want to include lowercase characters?");
        useUpperCase = confirm("Do you want to include uppercase characters?");
        useSpecial = confirm("Do you want to include special characters?");
    }

    // Check password length must be at least 8 characters but can be up to 128
    if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === isNaN || passwordLength === null) {
        alert("Try again! Choose a number between 8 and 128 characters");
        passwordLength = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters."));
    }

    function generateP() {
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (i = 1; i <= 8; i++) {
            var char = Math.floor(Math.random() *
                str.length + 1);

            pass += str.charAt(char)
        }

        return pass;
    }

}
//generateButton.onclick generatePassword