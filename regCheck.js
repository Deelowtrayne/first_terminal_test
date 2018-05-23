module.exports = function regCheck(regNumber, locationTag) {
  return regNumber.endsWith(locationTag);
}
