var enter;
var inputLower;
var inputUpper;
var inputNumber;
var inputSpecial;

//variables arrays with the different options
var Lower = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
var Upper = ["A","B ","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",];
var Number =["2","3","4","5","6","7","8","9",];
var Special =["!", "@","#","$","%","&","*","?","+"];

// Function to get variable selection
function getRandomLower(){
  var Lower = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
  return Lower[Math.floor(Math.random() * Lower.length)];
}
function getRandomUpper(){
  var Upper = ["A","B ","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",];
  return Upper[Math.floor(Math.random() * Upper.length)];
}
function getRandomNumber(){
  var Number =["2","3","4","5","6","7","8","9",];
  return Number[Math.floor(Math.random() * Number.length)];
}
function getRandomSpecial(){
  var Special =["!", "@","#","$","%","&","*","?","+"];
  return Special[Math.floor(Math.random() * Special.length)];
}
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
      enter = parseInt(prompt("Between 8 and 128, how many characters would you want your password?"));
      if (!enter) {
          alert("Enter a number between 8 and 128");
      } else if (enter < 8 || enter > 128) {
          enter = parseInt(prompt("Number must be between 8 and 128"));
  
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


