module.exports = function totalPhoneBill(callsAndSmses) {
  var allData = callsAndSmses.split(', ');
  var totalBill = 0;
  for (var i = 0; i < allData.length; i++) {
  	if (allData[i] == "call") {
    	totalBill += 2.75;
    } else if (allData[i] == "sms"){
    	totalBill += 0.65;
    }
  }
  // toFixed - rounds down to 2 decimal places
  return "R" + totalBill.toFixed(2);
}
