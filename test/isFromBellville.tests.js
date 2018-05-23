const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe("isFromBellville function", function(){
  //tests
  it('isFromBellville() should return true if the regitration number is from Bellville', function(){
    assert.equal(isFromBellville('CY982364'), true);
  });
  it('isFromBellville() should return false if the regitration number is not from Bellville', function(){
    assert.equal(isFromBellville('CJ982364'), false);
  });
});
