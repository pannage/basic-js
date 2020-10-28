const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrixArr) {
  let concArr = []
  for (let i = 0; i < matrixArr.length; i++) {
    concArr = concArr.concat(matrixArr[i])
  }
  let catArr = concArr.filter(
    function (catEars){
     return catEars === '^^'
    }
  )
    return catArr.length

};
