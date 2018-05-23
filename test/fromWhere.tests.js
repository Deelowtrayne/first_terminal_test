const assert = require('assert');
const fromWhere = require('../fromWhere');

describe('fromWhere function', function(){
  it('fromWhere() should return \'Bellville\' if the registration number is a CY', function(){
    assert.deepEqual(fromWhere('CY98723'), 'Bellville');
  });
  it('fromWhere() should return \'Paarl\' if the registration number is a CJ', function(){
    assert.deepEqual(fromWhere('CJ98723'), 'Paarl');
  });
  it('fromWhere() should return \'Cape Town\' if the registration number is a CA', function(){
    assert.deepEqual(fromWhere('CA98723'), 'Cape Town');
  });
  it('fromWhere() should return \'Some other place!\' if the registration number is not CY, CJ or CA', function(){
    assert.deepEqual(fromWhere('CL98723'), 'Some other place!');
  });
});
