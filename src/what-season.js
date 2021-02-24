const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  if (date instanceof Date) {
    let year = date.getFullYear();
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let curMonth = date.getMonth() + 1;
    let day = date.getDate();
  
    date.toDateString();
    
    let season = '';

    if (curMonth === 1 || curMonth === 2 || curMonth === 12) {
      season = 'winter';
    } else if (curMonth === 3 || curMonth === 4 || curMonth === 5) {
      season = 'spring';
    } else if (curMonth === 6 || curMonth === 7 || curMonth === 8) {
      season = 'summer';
    } else if (curMonth === 9 || curMonth === 10 || curMonth === 11) {
      season = 'autumn';
    } 

    return season;
  } else {
    if (date === undefined) {
      return 'Unable to determine the time of year!';
    } else {
      throw new Error('Error');
    }
  }
};
