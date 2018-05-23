
module.exports = function findItemsOver20(itemsList) {
  var expensiveItems = [];
  // If list is empty return empty string
  if (itemsList.length < 1) {
    return "";
  }

  for (var i = 0; i < itemsList.length; i++) {
    var currItem = itemsList[i];
  	if (currItem.qty > 20) {
      expensiveItems.push(currItem);
    }
  }
  return expensiveItems;
}
 