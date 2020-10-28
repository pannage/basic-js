const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i-1] === '--discard-next') {
      newArr.push(undefined);
    } else if (arr[i+1] === '--discard-prev' || arr[i] === '--discard-prev') {
      newArr.push(undefined);
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i+1]);

    } else if (arr[i] === '--double-prev') {
      newArr.push(newArr[i-1]);
    } else if (arr[i-1] === '--discard-next') {
      newArr.push(undefined);
    }
     else {
      newArr.push(arr[i]);
    }
  }

  let resArr = newArr.filter(function(value) {
    return value !== undefined;
  })

  return resArr;
};
