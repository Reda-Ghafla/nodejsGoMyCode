const generatePassword = require('generate-password');

let passWord = generatePassword.generate({
  length: 15,
  numbers: true,
  symbols: true,
});
console.log(passWord);
