class Calculator {
  constructor(firstnum, secondnum) {
    this.firstnum = firstnum;
    this.secondnum = secondnum;
  }
  add() {
    return this.firstnum + this.secondnum;
  }
  subtract() {
    return this.firstnum - this.secondnum;
  }
  multiply() {
    return this.firstnum * this.secondnum;
  }
  divide() {
    return this.firstnum / this.secondnum;
  }
}
module.exports = Calculator;
