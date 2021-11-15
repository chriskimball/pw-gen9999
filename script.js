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
 
  // alert user whether numbers should be included
  numbers.isIncluded= confirm("Should Numbers be included?");

  // alert user whether lower case should be included
  lowerLetters.isIncluded= confirm("Should lower case letters be included?");

  // alert user whether upper case should be included
  upperLetters.isIncluded= confirm("Should upper case letters be included?");

  // alert user whether special characters should be included
  specialChar.isIncluded= confirm("Should special characters be included?");

  // repeating code should be cosolidated
  // if all user alerts are false, return
  if ((!numbers.isIncluded) && (!lowerLetters.isIncluded) && (!upperLetters.isIncluded) && (!specialChar.isIncluded)) {
    alert("You must include at least one character type.")
    return
  };

  // after user input gathered create blank array that contains a string from all other arrays for requested input
  var includedChar = [];
  
  // if any of user alerts are true, include in generatePassword
  function includedArray(includedValue) {
    if (includedValue.isIncluded) {
      return includedChar.push(includedValue)
    }
  }
  
  includedArray(numbers);
  includedArray(lowerLetters);
  includedArray(upperLetters);
  includedArray(specialChar);

  console.log(includedChar)

  
  // this function will randomly select an index value for the given array
  var indexPointer = ""
  function indexFinder (array) {
    indexPointer = Math.floor( Math.random() * array.length);
    return indexPointer;
  };
  var password = "";
  
  // for loop to add characters from user selection to repeat until given password length
  for (var i=0; i < passwordLength; i++) {
    password += includedChar[indexFinder(includedChar)].values[(indexFinder(includedChar[indexPointer].values))];
  };

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
