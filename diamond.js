"use strict"

class Diamond {
  static makeDiamond(letter) {
    if (letter === 'A') return "A\n";

    let aVal = 'A'.charCodeAt(0);
    let letterVal = (letter).charCodeAt(0);
    let topVal = letterVal - aVal;
    let diamond = '';

    for (let idx = 0; idx <= topVal; idx += 1) {
      if (idx === 0) {
        diamond += ' '.repeat(topVal - idx) + String.fromCharCode(aVal + idx) + ' '.repeat(topVal - idx) + "\n";
      } else {
        diamond += ' '.repeat(topVal - idx) + String.fromCharCode(aVal + idx) +
          ' '.repeat((idx - 1) * 2 + 1) + String.fromCharCode(aVal + idx) + ' '.repeat(topVal - idx) + "\n";
      }
    }
    for (let idx = topVal - 1; idx >= 0; idx -= 1) {
      if (idx === 0) {
        diamond += ' '.repeat(topVal - idx) + String.fromCharCode(aVal + idx) + ' '.repeat(topVal - idx) + "\n";
      } else {
        diamond += ' '.repeat(topVal - idx) + String.fromCharCode(aVal + idx) +
          ' '.repeat((idx - 1) * 2 + 1) + String.fromCharCode(aVal + idx) + ' '.repeat(topVal - idx) + "\n";
      }
    }
    return diamond;
  }
}

module.exports = Diamond;