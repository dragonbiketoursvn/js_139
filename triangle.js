class Triangle {
  constructor(side1, side2, side3) {
    if ((arguments.length !== 3) || [...arguments].every(side => side === 0) || [...arguments].some(side => side < 0)
      || [...arguments].some(side => side >= ([...arguments].reduce((a, b) => a + b) - side))) {
      throw new Error('invalid dimensions');
    } else {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  }
  kind() {
    switch (true) {
      case this.side1 === this.side2 && this.side1 === this.side3:
        return "equilateral";
      case (this.side1 === this.side2 && this.side1 !== this.side3) ||
        this.side1 === this.side3 && this.side1 !== this.side2 ||
        this.side2 === this.side3 && this.side2 !== this.side1:
        return "isosceles";
      default:
        return "scalene";
    }
  }
}

module.exports = Triangle;