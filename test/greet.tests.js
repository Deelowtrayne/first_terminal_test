const assert = require('assert');
const greet = require('../greet');
describe('greet function', function(){
  // Local variables
  var personName = "Luvuyo";
  it('greet() should return a greeting message like: Hello, Tshepo', function(){
    assert.equal(greet(personName), 'Hello, ' + personName);
  });
});
