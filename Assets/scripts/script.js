var generateBtn = document.querySelector("#generate");

function generatePassword() {

    //Arrays

    var uppcaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowcaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?"];

    var resultArray = [];
    var userArray = [];

    //User input

    var numCharacter = prompt("How many character do you want, must be between 8 and 128?");
    var numbers = confirm("Click okay for numbers in your password?");
    var uppercases = confirm("Click okay for uppercase characters in your password");
    var lowercases = confirm("Click okay for lowercase characters in your password");
    var characters = confirm("Click okay to include special characters in your password");


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
    console.log(resultArray)



    for (var i = 0; i < numCharacter; i++) {

        userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
    }

    return userArray.join("");
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);