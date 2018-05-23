const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown function', function(){
  //local variables
  var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
  it('countAllFromTown() should return the number of registrations belonging to a given town', function(){
    //fromStellies should contains
    assert.deepEqual(fromStellies, 3);
  });
});
