const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  

  let new_str = String(str);
  let new_addition = String(addition);
  let arr_of_addition = [];
  let arr_of_str = [];
  let addition_str = '';
  let result_str = '';

  for (let j = 0; j < additionRepeatTimes; j ++) {
    arr_of_addition.push(new_addition);
  }

  addition_str = arr_of_addition.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i ++) {
    arr_of_str.push(new_str + addition_str);
  }
  
  result_str = arr_of_str.join(separator);

  return result_str;
};
  