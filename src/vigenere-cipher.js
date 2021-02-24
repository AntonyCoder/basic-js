const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {  
  constructor (type) {this.reverseType = type === false;}

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Error');

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();
    let result = '';
    let code = [];
    let key_code = [];
    let result_code = [];

    for (let j = 0; j < new_message.length; j += 1) {
      key_code.push(new_key[j % new_key.length].charCodeAt() - 65);
    }

    for (let i = 0; i < new_message.length; i += 1) {
      if (new_message[i].charCodeAt() > 64 && new_message[i].charCodeAt() < 91) code.push(new_message[i].charCodeAt() - 65);
      else code.push(69);
    }

    for (let n = 0, s = 0; n < new_message.length; n += 1, s += 1) {
      if (code[n] !== 69) result_code.push((code[n] + key_code[s]) % 26);
      else if (new_message[n] === ' ') {
        result_code.push(code[n]);
        s -= 1;
      } else result_code.push(code[n]);
    }

    for (let m = 0; m < result_code.length; m += 1) {
      if (result_code[m] !== 69) result = result + String.fromCharCode(result_code[m] + 65);
      else result = result + new_message[m];
    }

    return this.reverseType ? result.split("").reverse().join("") : result;
  }  

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Error');

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();
    let result = '';
    let code = [];
    let key_code = [];
    let result_code = [];

    for (let j = 0; j < new_message.length; j += 1) {
      key_code.push(new_key[j % new_key.length].charCodeAt() - 65);
    }

    for (let i = 0; i < new_message.length; i += 1) {
      if (new_message[i].charCodeAt() > 64 && new_message[i].charCodeAt() < 91) code.push(new_message[i].charCodeAt() - 65);
      else code.push(69);
    }

    for (let n = 0, s = 0; n < new_message.length; n += 1, s += 1) {
      if (code[n] !== 69) result_code.push((code[n] + 26 - key_code[s]) % 26);
      else if (new_message[n] === ' ') {
        result_code.push(code[n]);
        s -= 1;
      } else result_code.push(code[n]);
    }

    for (let m = 0; m < result_code.length; m += 1) {
      if (result_code[m] !== 69) result = result + String.fromCharCode(result_code[m] + 65);
      else result = result + new_message[m];
    }

    return this.reverseType ? result.split("").reverse().join("") : result;
  }
}

module.exports = VigenereCipheringMachine;
