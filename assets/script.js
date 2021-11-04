// Assignment code here
//To include lowercase characters
var lowercasecharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

//To include uppercase characters
var uppercasecharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//To include numeric characters
var numericcharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

//To include special characters
var specialcharacters = [
  '',
  '!',
  '”',	
  '#',	
  '$',	
  '%',	
  '&',	
  '’',	
  '(',	
  ')',	
  '*',	
  '+',	
  ',',	
  '-',	
  '.',	
  '/',	
  ':',	
  ';',	
  '<',	
  '=',	
  '>',	
  '?',	
  '@',	
  '[',	
  '\',	
  ']',	
  '^',	
  '_',	
  '`',	
  '{',	
  '|',	
  '}',	
  '~',	
];


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
