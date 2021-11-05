// Define the  arrays of lowercase, uppercase, numeric, and/or special characters

const specialcharacters = ["<","(","[","{","\\","^","-","=","$","!","|","]","}",")","?","*","+",".",">"];

const upperletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const lowerletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbercharacters = ["1","2","3","4","5","6","7","8","9"];



function generatePassword() {

//Console to test the code is working 

console.log("Hello! You clicked the button!");



//  Conditional statement to check if password length is at least 8 characters and less than 128 characters.

var length = prompt("How many characters would you like your password to contain?");

if(length > 128 || length < 8) {

  alert("Password length must be at least 8 characters and less than 129 characters ");

  generatePassword(); 
  
  //Restart
}


//  Ask the user if the upper-case letter should be included

var includeuppercase = confirm("Click OK to confirm including uppercase characters.");


//  Ask the user if the lower-case letter should be included

var includelowercase = confirm("Click OK to confirm including lowercase characters.");


//  Ask the user if the special characters should be included

var includespecialcase = confirm("Click OK to confirm including special characters.");



//  Ask the user if the numeric characters should be included

var includenumbercase = confirm("Click OK to confirm including numeric characters.");



//  Make sure the user picked at least 1 option 



//Use an empty variable for the user selection

var selection = [];


// Conditional statement to check if user does not include any types of characters.

if(!includelowercase && !includeuppercase && !includenumbercase && !includespecialcase) {

  alert("Must select at least one character type");

  generatePassword(); 
  
  //Restart

}



//Go through all the different options that the user can select


//If all 4 is true

else if (includelowercase && includespecialcase && includeuppercase && includenumbercase) {

  selection = lowerletters.concat(upperletters,numbercharacters,specialcharacters);

  console.log(selection);

}



// Use else if for 3 options

else if(includelowercase && includenumbercase && includespecialcase) {

  selection = lowerletters.concat(numbercharacters, specialcharacters);

  console.log(selection);

}


else if (includelowercase && includeuppercase && includenumbercase) {

  selection = lowerletters.concat(upperletters, numbercharacters);

  console.log(selection);

}

else if(includeuppercase && includenumbercase && includespecialcase) {

  selection = upperletters.concat(numbercharacters, specialcharacters);

  console.log(selection);

}

else if (includelowercase && includeuppercase && includespecialcase) {

  selection = lowerletters.concat(upperletters, specialcharacters);

  console.log(selection);

}



//Use else if for 2 options

else if(includelowercase && includenumbercase) {

  selection = lowerletters.concat(numbercharacters);

  console.log(selection);

}

else if(includelowercase && includeuppercase) {

  selection = lowerletters.concat(upperletters);

  console.log(selection);

}

else if(includeuppercase && includenumbercase) {

  selection = upperletters.concat(numbercharacters);

  console.log(selection);

}

else if(includelowercase && includespecialcase) {

  selection = lowerletters.concat(specialcharacters);

  console.log(selection);

}


else if(includeuppercase && includespecialcase) {

  selection = upperletters.concat(specialcharacters);

  console.log(selection);

}

else if(includenumbercase && includespecialcase) {

  selection = numbercharacters.concat(specialcharacters);

  console.log(selection);

}



//Use else if for 1 option

else if(includespecialcase) {

  selection = specialcharacters;

  console.log(selection);

}

else if(includeuppercase) {

  selection = upperletters;

  console.log(selection);

}

else if(includelowercase) {

  selection = lowerletters;

  console.log(selection);

}


else if(includenumbercase) {

  selection = numbercharacters;

  console.log(selection);

}



//In order to get a random password generated, declere an empty var

var getrandompassword = "";



//Use for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
for(var i = 0; i < length; i++) {

  getrandompassword = getrandompassword + selection[Math.floor(Math.random()*selection.length)];

  console.log(getrandompassword);

}


//Use a return fanction(getrandompassword)

return getrandompassword;

}





// Get references to the #generate element

var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
