const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  
  let dreamTeamArr = members.map(function(value) {
    if (typeof(value) === "string") {
      return value.trim()[0].toUpperCase()
    }
  } )
  return dreamTeamArr.sort().join("")
};
