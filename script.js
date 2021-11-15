// Assignment Code
var generateBtn = document.querySelector("#generate");

// number object
var numbers = {
  values:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  isIncluded: true
};
// lower case letter object
var lowerLetters = {
  values:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  isIncluded: true
};
// upper case letter object
var upperLetters = {
  values: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  isIncluded:true
};
// special character object
var specialChar = {
  values: [" ","!",`"`,"#","$","%","&",`’`,"(",")","*","+", `,`,"-",".","/",":",";","<","=",">","?","@","[",`\\`,"]","_","`","{","|","}","~"],
  isIncluded:true
};

console.log(numbers);
console.log(lowerLetters);
console.log(upperLetters);
console.log(specialChar);

//smaller the function the better
//on button click start passwordParameters function

//alerts
// let isExecuted = confirm("Are you sure to execute this action?");
// console.log(isExecuted);

  //alert will always be undefined
  // console.log(alert( "A message" ));
  //promopt will alwasys return a string
  // console.log(prompt( "Give me some info"))
  //confirm will always return boolean
  // console.log(confirm( "A yes / no choice"))


function generatePassword(){
  //prmopt user how long password should be
  var passwordLength = prompt("How Long do you want your password to be?")
  
  // if password length is blank, return
  if (passwordLength == "") {
    alert("You need to enter a number between 8 and 128.")
    return
  } 
  // if password length is not a number, return
  else if (isNaN(passwordLength)) {
    alert("You must enter a number between 8 and 128.")
    return
  }
  // if pw length is < 8, return
  else if (passwordLength < 8) {
    alert("Your password must be 8 or more characters long.")
    return
  } 
  // if pw length is > 128, return  
  else if (passwordLength > 128) {
    alert("Your password cannot be longer than 128 characters.")
    return
  };
  console.log(passwordLength)
  
  // alert user whether numbers should be included
  numbers.isIncluded= confirm("Should Numbers be included?");

  console.log(numbers.isIncluded);

  // alert user whether lower case should be included
  lowerLetters.isIncluded= confirm("Should lower case letters be included?");

  console.log(lowerLetters.isIncluded);

  // alert user whether upper case should be included
  upperLetters.isIncluded= confirm("Should upper case letters be included?");

  console.log(upperLetters.isIncluded);
  // alert user whether special characters should be included
  specialChar.isIncluded= confirm("Should special characters be included?");

  console.log(specialChar.isIncluded);
  // repeating code should be cosolidated
  // if all user alerts are false, return
  // if any of user alerts are true, include in generatePassword
  // if any of user alerts are false, exclude from generatePassword

  // after user input gathered create blank array that contains a string from all other arrays for requested input
  
  // add items at random into another array


  //declare password to an empty data string and empty array for selected characters
  var password = "";
  var characters = []

  console.log('generate a password.');
  
  // appending password with new character
  // shorthand for password = password + "a";
  // need strategy to randomly select values for our arrays
  // build a string, one character at a time
  // for loop to repeat, first selecting a random character and then appending it to string
  // for loop to loop until password is desired length

  // when working on logic of pw generator work with hard coded values and not user input values, comment out the gathering value logic after
  var passwordLength = 10;
  var isNumber = true; //confirm("do you want numbers?") true
  
  // you could start prebuilding the password with one of each of the selections before start randomly filling in characters in the for loop at the bottom
  if (isNumber) {
    // password +=
    characters = characters.concat(numbers);
  }

  var isLower = false;
  var isUpper = false;
  var isSpecial = true;



  // select an available character
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
