const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (isReverse) {
    this.reverseString = isReverse
  }

  encrypt(value, key) {
    let encryptedString = ''
    value = value.toUpperCase();
    key = key.toUpperCase();
    let checkSpace = 0;
    for (let i=0; i<value.length; i++) {
      let j = (i - checkSpace) % key.length ;
      if (value.charCodeAt(i) >=65 && value.charCodeAt(i) <=90){
        encryptedString = encryptedString + String
          .fromCharCode( (((value.charCodeAt(i)-65) + (key.charCodeAt(j)-65)) % 26) + 65)
      } else {
        checkSpace = checkSpace + 1;
        encryptedString = encryptedString + value[i];
      }
    }
    if (this.reverseString === false) {
      return encryptedString.split('').reverse().join('');
    }
    return encryptedString;

  }
  
  
  decrypt(value, key) {
    let decryptedString = ""
    value = value.toUpperCase();
    key = key.toUpperCase();
    let checkSpace = 0;
    for (let i=0; i<value.length; i++) {
      let j = (i - checkSpace) % key.length ;
      if (value.charCodeAt(i) >=65 && value.charCodeAt(i) <=90){
        decryptedString = decryptedString + String
          .fromCharCode(( ((value.charCodeAt(i)-65) - (key.charCodeAt(j)-65)+26) % 26) + 65)
      } else {
        checkSpace = checkSpace + 1;
        decryptedString = decryptedString + value[i];
      }
    }
    if (this.reverseString === false) {
      return decryptedString.split('').reverse().join('');
    }
    return decryptedString;




  }
}

module.exports = VigenereCipheringMachine;
