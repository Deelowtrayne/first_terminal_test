
module.exports = function findItemsOver(itemsList, threshold) {
  var expensiveItems = [];
  // If list is empty return empty string
  if (itemsList.length < 1) {
    return "";
  }

  for (var i = 0; i < itemsList.length; i++) {
    var currItem = itemsList[i];
  	if (currItem.qty > threshold) {
      expensiveItems.push(currItem);
    }
  }
  return expensiveItems;
}
