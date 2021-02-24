const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let result;
  let activity = Number(sampleActivity);
  if ((typeof sampleActivity === "string") && activity > 0 && activity <= 15) {
    result = Math.log2(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD;
    return Math.ceil(result);
  } else {
    return false;
  }
};
