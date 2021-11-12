// Assignment Code
var generateBtn = document.querySelector("#generate");

// number array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower case letter array
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// upper case letter array
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// special character array
var specialChar = [" ","!","U+0022","#","$","%","&","U+0027","(",")","*","+","U+002C","-",".","/",":",";","<","=",">","?","@","[","U+005C","]","_","`","{","|","}","~"];

console.log(specialChar)
function generatePassword(){

  //declare password to an empty data string
  var password = "";

  console.log('generate a password.');
  
  //appending password with new character
  //shorthand for password = password + "a";
  //for loop to loop until password is desired length
  //need strategy to randomly select values for our arrays
  //build a string, one character at a time
  password += "a";
  password += "s";
  password += "g";

  //return password 
  return password;

} 


//WE DONT NEED TO MODIFY CODE BELOW THIS COMMENT
// Write password to the #password input
function writePassword() {
  //assigning password variable
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
