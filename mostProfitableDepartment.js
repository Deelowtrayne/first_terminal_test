module.exports = function mostProfitableDepartment(departments) {
  var mostProfDept = "";
  var highestSales = 0;

  for (var i = 0; i < departments.length; i++) {
  	if (departments[i].sales >= highestSales) {
      mostProfDept = departments[i].department;
      highestSales = departments[i].sales;
      //console.log(departments[i].department + " @ " + departments[i].sales);
    }
  }
  return mostProfDept;
}
