const assert = require('assert');
const transportFee = require('../transportFee');

describe('transportFee function', function(){
  it('transportFee() should return \'R20\' if the shift passed is morning', function(){
    assert.deepEqual(transportFee('morning'), 'R20');
  });
  it('transportFee() should return \'R10\' if the shift passed is afternoon', function(){
    assert.deepEqual(transportFee('afternoon'), 'R10');
  });
  it('transportFee() should return \'free\' if the shift passed is nightshift', function(){
    assert(transportFee('nightshift'), 'free');
  });
  it('transportFee() should return \'not a shift\' if the shift passed is morning, afternoon or nightshift', function(){
    assert(transportFee('Raspberry'), 'Not a shift');
  });
});
