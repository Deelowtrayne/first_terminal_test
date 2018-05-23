const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl function', function(){
  
  it('countAllPaarl() should return the number of registrations belonging to Paarl', function(){
    const list = 'CJ623772, CY97305, CJ294756, CJ872348, CA274350';
    assert.equal(countAllPaarl(list), 3);
  });
});
