const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  if (Array.isArray(arr) && arr.length !== 0) {
    return 1 + Math.max(...arr.map(t => this.calculateDepth(t)));
  } else if (arr.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
};