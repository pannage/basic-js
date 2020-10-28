const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let res = {};
let turnNumber = 2**disksNumber - 1;
let speed = Math.floor(turnNumber / turnsSpeed * 3600);
res.turns = turnNumber;
res.seconds = speed;
return res
};
