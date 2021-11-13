// Assignment Code
var generateBtn = document.querySelector("#generate");

// global password variable
var password = "";

// number array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower case letter array
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// upper case letter array
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// special character array
var specialChar = [" ","!",`"`,"#","$","%","&","U+0027","(",")","*","+","U+002C","-",".","/",":",";","<","=",">","?","@","[","U+005C","]","_","`","{","|","}","~"];

console.log(specialChar);

//smaller the function the better
//on button click start passwordParameters function

//alerts
// let isExecuted = confirm("Are you sure to execute this action?");
// console.log(isExecuted);

function generatePassword(){
  //prmopt user how long password should be
  // if password length is blank, return
  // if password length is not a number, return
  // if pw length is < 8, return
  // if pw length is > 128, return

  // alert user whether numbers should be included
  // alert user whether lower case should be included
  // alert user whether upper case should be included
  // alert user whether special characters should be included
  // repeating code should be cosolidated
  // if all user alerts are false, return
  // if any of user alerts are true, include in generatePassword
  // if any of user alerts are false, exclude from generatePassword

  // after user input gathered create blank array that contains a string from all other arrays for requested input
  
  // add items at random into another array


  //declare password to an empty data string
  password = "";

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
