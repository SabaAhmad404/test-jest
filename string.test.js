const stringLength = require("./string");
const str = "saba";
test("counting string", () => {
  expect(stringLength(str)).toBe(4);
});
