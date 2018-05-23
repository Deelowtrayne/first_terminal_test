module.exports = function countAllPaarl(regList) {
  	var allRegs = regList.split(", ");
	var paarlRegs = [];

  	for (var i = 0; i < allRegs.length; i++) {
      if (allRegs[i].startsWith("CJ")) {
        paarlRegs.push(allRegs[i]);
      }
    }
  	return paarlRegs.length;
}
