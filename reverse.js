const reverseString = (reves) => {
  const splitThing = reves.split("");
  const reverseArray = splitThing.reverse();
  const joinArray = reverseArray.join();
  return joinArray;
};
module.exports = reverseString;
