class RomanNumeral {
  constructor(decimalNum) {
    this.decimalNum = String(decimalNum);
    this.digits = {
      1: {single: "I", five: "V"},
      10: {single: "X", five: "L"},
      100: {single: "C", five: "D"},
      1000: {single: "M", five: ""},
    }
  }
  toRoman() {
    let outputStringArr = [];
    let exponent = this.decimalNum.length - 1;

    for (const char in this.decimalNum) {
      let placeVal = 10 ** exponent;
      let currentDigit = this.decimalNum[char];

      if (currentDigit === '9') {
        outputStringArr.push(this.digits[placeVal].single);
        outputStringArr.push(this.digits[placeVal * 10].single);
      } else if (currentDigit > '5' && currentDigit < '9') {
        outputStringArr.push(this.digits[placeVal].five);
        outputStringArr.push(this.digits[placeVal].single.repeat(Number(currentDigit) - 5));
      } else if (currentDigit === '5') {
        outputStringArr.push(this.digits[placeVal].five);
      } else if (currentDigit === '4') {
        outputStringArr.push(this.digits[placeVal].single);
        outputStringArr.push(this.digits[placeVal].five);
      } else if (currentDigit > '0') {
        outputStringArr.push(this.digits[placeVal].single.repeat(Number(currentDigit)));
      }
      exponent -= 1;
    }
    return outputStringArr.join('');
  }
}

module.exports = RomanNumeral;
