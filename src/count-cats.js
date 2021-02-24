const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard/* matrix */) {
  // throw new CustomError('Not implemented');
   let numOfSubArr = backyard.length - 1;
    let cats = 0;
    for (let i = 0; i <= numOfSubArr; i++) {
      let numOfElements = backyard[i].length - 1;
      for (let j = 0; j <= numOfElements; j++) {
        if (backyard[i][j] === '^^') {
          cats++;
        }
      }
    }
    
    return cats;
};
