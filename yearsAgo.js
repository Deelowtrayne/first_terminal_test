module.exports = function yearsAgo(year) {
  	var currentYear = new Date();
  	return currentYear.getFullYear() - year;
}
