var generateBtn = document.querySelector("#generate");

function generatePassword() {

    //Arrays

    var uppcaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowcaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?"];

    var resultArray = [];
    var userArray = [];

    //User input----------------------------------------------------------------------------

    //validate user input for 8-128 characters
    var passwordLength;
    passwordLength = prompt("How many character do you want, must be between 8 and 128?");

    if (!passwordLength) {
        alert("Please enter a number!");
        return;

    } else if (!passwordLength || passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
        alert('Start Again! Length must be between 8 and 128');
        return;

    }

    var numbers = confirm("Click OK to include numbers in your password");
    var uppercases = confirm("Click OK to include uppercase characters in your password");
    var lowercases = confirm("Click OK to include lowercase characters in your password");
    var characters = confirm("Click OK to include special characters in your password");



    if (numbers) {
        resultArray = resultArray.concat(numbArray);

    }

    if (uppercases) {
        resultArray = resultArray.concat(uppcaseArray);

    }

    if (lowercases) {
        resultArray = resultArray.concat(lowcaseArray);

    }

    if (characters) {
        resultArray = resultArray.concat(charArray);
    }


    //Display results-----------------------------------------------------------------

    for (var i = 0; i < passwordLength; i++) {

        userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
    }

    return userArray.join("");
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);