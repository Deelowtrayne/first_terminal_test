module.exports = function isWeekday(dayName) {
	return !dayName.startsWith("S");
}
