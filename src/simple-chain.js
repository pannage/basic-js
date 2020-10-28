const CustomError = require("../extensions/custom-error");
let arrString = [];

const chainMaker = {

  getLength() {
    arrString.push(arrString.length);
    return chainMaker;
  },
  addLink(value) {
    if (value === null) {
      arrString.push('null');
    } else {
      arrString.push(value);
    }

    return chainMaker;
  },
  removeLink(position) {
    if (position > 0 && position <= arrString.length) {
        arrString.splice(position-1, 1);
    } else {
      arrString = [];
      throw new Error;
    }
    return chainMaker;
  },
  reverseChain() {
    arrString.reverse();
    return chainMaker;
  },
  finishChain() {
    let resString =  '( ' + arrString.join(' )~~( ') + ' )'
    arrString = [];
    return resString;
  }
};

module.exports = chainMaker;
