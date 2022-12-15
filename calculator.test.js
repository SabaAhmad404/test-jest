const Calculator = require("./calculator.js");
const cal1 = new Calculator(2, 3);
const cal2 = new Calculator(4, 5);
const cal3 = new Calculator(2, -4);
describe("add function", () => {
  test("2 and 3 add", () => {
    expect(cal1.add()).toBe(5);
  });

  test("4 and 5 add", () => {
    expect(cal2.add()).toBe(9);
  });
  test("2 and -4 add", () => {
    expect(cal3.add()).toBe(-2);
  });
});
describe("subtractfunction", () => {
  test("2 and 3 sub", () => {
    expect(cal1.subtract()).toBe(-1);
  });

  test("4 and 5 sub", () => {
    expect(cal2.subtract()).toBe(-1);
  });
  test("2 and -4 add", () => {
    expect(cal3.subtract()).toBe(6);
  });
});
describe("multiply function", () => {
  test("2 and 3 add", () => {
    expect(cal1.multiply()).toBe(6);
  });

  test("4 and 5 multiply", () => {
    expect(cal2.multiply()).toBe(20);
  });
  test("2 and -4 multiply", () => {
    expect(cal3.multiply()).toBe(-8);
  });
});
describe("divide function", () => {
  test("2 and 3 divide", () => {
    expect(cal1.divide()).toBe(0.6666666666666666);
  });

  test("4 and 5 add", () => {
    expect(cal2.divide()).toBe(0.8);
  });
  test("2 and -4 add", () => {
    expect(cal3.divide()).toBe(-0.5);
  });
});
