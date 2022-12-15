const capitalWord = require("./captilization.js");
const str = "ahmad";
test("capital string", () => {
  expect(capitalWord(str)).toBe("Ahmad");
});
