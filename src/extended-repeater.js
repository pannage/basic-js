const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatedStr =  ''
  let additionalStr = ''
  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    repeatedStr = str + options.addition
  }

  for (let j = 1; j<=options.additionRepeatTimes; j++) {
    if (j<options.additionRepeatTimes){
      additionalStr = additionalStr + options.addition + options.additionSeparator
    } else {
      additionalStr = additionalStr + options.addition
    }
  }


  for (let i=1; i <= options.repeatTimes; i++){
    if (i<options.repeatTimes) {
      if (options.separator === undefined) {
        repeatedStr = repeatedStr + str  + additionalStr +  '+'
      } else {
        repeatedStr = repeatedStr + str  + additionalStr + options.separator
      }
    } else {
      if (options.separator === undefined) {
        repeatedStr = repeatedStr + str +  additionalStr
      } else {
        repeatedStr = repeatedStr + str +  additionalStr
      }
    }

  }
  return repeatedStr
};
  