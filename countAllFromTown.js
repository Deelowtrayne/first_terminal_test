module.exports = function countAllFromTown(regList, locationTag) {
  var allRegs = regList.split(",");
	var townList = [];
  	for (var i = 0; i < allRegs.length; i++) {
      	var currentReg = allRegs[i].trim();
    	if (currentReg.startsWith(locationTag)) {
        	townList.push(allRegs[i]);
        }
    }
  return townList.length;
}
