const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counterRes = 1;
    let counter = 1;
    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {


        let depth = this.calculateDepth(arr[i])
        counter = 1 + depth;
        if (counterRes < counter) {
          counterRes = counter;

        }
      }


    }
    return counterRes;
  }
};