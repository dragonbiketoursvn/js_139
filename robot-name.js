"use strict"

class Robot {
  static existingNames = [];

  constructor() {
    this.reset();
  }
  name() {
    return this.robotName;
  }
  reset() {
    let robotName = this.getRandomLetter() + this.getRandomLetter() +
      this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit();
    
    if (Robot.existingNames.includes(robotName)) {
      this.reset();
    } else {
      this.robotName = robotName;
      Robot.existingNames.push(robotName);
    }
  }
  getRandomLetter() {
    let letterCode = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(letterCode);
  }
  getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }
}

module.exports = Robot;