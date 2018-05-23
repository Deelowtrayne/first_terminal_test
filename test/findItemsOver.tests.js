const assert = require('assert');
const findItemsOver = require('../findItemsOver');

describe('findItemsOver function', function(){
  const items = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  const items2 = [
    {name : 'grapes', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  it('findItemsOver() should return a list of items with quantity over 5', function(){
    assert.deepEqual(findItemsOver(items, 5),[{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
  });
  it('findItemsOver() should return a list of items with quantity over 5 including grapes', function(){
    assert.deepEqual(findItemsOver(items2, 5),[{name : 'grapes', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
  });
});
