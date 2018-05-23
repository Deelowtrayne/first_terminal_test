const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('yearsAgo functions', function(){
  it('yearsAgo() should return a number of years', function(){
    assert.deepEqual(yearsAgo(2015), 3, true);
  });
});
