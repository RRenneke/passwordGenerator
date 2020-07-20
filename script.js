var enter;
var inputLower;
var inputUpper;
var inputNumber;
var inputSpecial;

// Start function to generate password
function generatePassword() {
      enter = prompt("Between 8 and 128, how many characters would you want your password?");
      if (!enter) {
          alert("Enter a number between 8 and 128");
      } else if (enter < 8 || enter > 128) {
          enter = prompt("Number must be between 8 and 128");
  
      } else {
          inputNumber = confirm("Do you want numbers?");
          inputSpecial = confirm("Do you want special characters?");
          inputUpper = confirm("Do you want uppercase letters?");
          inputLower = confirm("Do you want lowercase letters?");
      };

    var generateBtn = document.querySelector("#generate");

            // Input Possibilites into password
            if (inputNumber && inputSpecial && inputUpper){
                password = character.concat(Number, Special, Upper);
                }
            else if (inputNumber && inputSpecial && inputLower) {
                password = character.concat(Number, Special, Lower);
                }
            else if (inputSpecial && inputUpper && inputLower){
                password = character.concat(Special, Upper, Lower);
                }
            else if (inputNumber && inputSpecial){
                password = character.concat(Number, Special);
                }
            else if (inputNumber && inputUpper){
                password = character.concat(Number, Upper);
                }
            else if (inputNumber && inputLower){
                password = character.concat(Number, Lower);
                }
            else if (inputSpecial && inputUpper){
                password = character.concat(Special, Upper);
                }
            else if (inputSpecial && inputLower){
                password = character.concat(Special, Lower);
                }
            else if (inputUpper && inputLower) {
                password = character.concat(Upper, Lower);
                }
            else if (inputNumber){
                password = character.concat(Number);
                }
            else if (inputSpecial) {
                password = Special;
                }
            else if (inputUpper){
                password = Upper;
                }
            else if (inputLower) {
                password = Lower;
                }

                    const randomFunc ={
                      Lower: getRandomLower,
                      Upper: getRandomUpper,
                      Number: getRandomNumber,
                      Special: getRandomSpecial
                      };
                    
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
                    function writePassword() {
                      var password = generatePassword();
                      var passwordText = document.querySelector("#password");
                      passwordText.value = password;
                      }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);