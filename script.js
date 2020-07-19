var enter;
var inputLower;
var inputUpper;
var inputNumber;
var inputSpecial;

//variables arrays with the different options
var inputLower = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
var inputUpper = ["A","B ","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",];
var inputNumber =["2","3","4","5","6","7","8","9",];
var inputSpecial =["!", "@","#","$","%","&","*","?","+"];

console.log(inputLower[3]);
console.log(inputNumber[2]);
console.log(inputSpecial[4]);


// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Start function to generate password
function generatePassword() {
      enter = parseInt(prompt("Between 8 to 128, how many characters would you like your password?"));
      if (!enter) {
          alert("This needs a value");
      } else if (enter < 8 || enter > 128) {
          enter = parseInt(prompt("You must choose between 8 and 128"));
  
      } else {
          inputNumber = confirm("Do you want numbers?");
          inputSpecial = confirm("Do you want special characters?");
          inputUpper = confirm("Do you want uppercase letters?");
          inputLower = confirm("Do you want lowercase letters?");
      };
    
    console.log(inputNumber);
    console.log(inputSpecial);
    console.log(inputUpper);
    console.log(inputLower);
  
// Input Possibilites
if (inputNumber && inputSpecial && inputUpper){

}
else if (inputNumber && inputSpecial && inputLower) {

}
else if (inputSpecial && inputUpper && inputLower){

}
else if (inputNumber && inputSpecial){

}
else if (inputNumber && inputUpper){

}
else if (inputNumber && inputLower){

}
else if (inputSpecial && inputUpper){

}
else if (inputSpecial && inputLower){

}
else if (inputUpper && inputLower) {

}
else if (inputNumber){

}
else if (inputSpecial) {

}
else if (inputUpper){

}
else if (inputLower) {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  }







 //for (var i = 0, i = inputLength; i++){
    //password = password + values.charArt(Math.floor(Math.random() * Math.floor(values.length -1)));
  //}

//for (var 1 =0; i = inputLenght; i +++);
  //password = password + values


