const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' 
  || sampleActivity*1 >= MODERN_ACTIVITY 
  || sampleActivity <= 0
  || isNaN(parseFloat(sampleActivity))) {
    return false
  }
  let age = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/0.693*HALF_LIFE_PERIOD
  return Math.ceil(age)
};

