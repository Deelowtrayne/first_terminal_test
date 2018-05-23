module.exports = function transportFee(theShift) {
	if (theShift == "morning") {
    	return "R20";
    } else if (theShift == "afternoon") {
    	return "R10";
    } else if (theShift == "nightshift"){
    	return "free";
    } else {
  		return "Not a shift";
    }
}
