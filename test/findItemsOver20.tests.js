const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20');
describe('findItemsOver20 function', function(){
  const items = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  it('findItemsOver20() should return a list of items with quantity over 20', function(){
    assert.deepEqual(findItemsOver20(items),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
  });
});
