const reverseString = require("./reverse");
const reves = "saba";
test("reverse string", () => {
  expect(reverseString(reves)).toBe("a,b,a,s");
});
