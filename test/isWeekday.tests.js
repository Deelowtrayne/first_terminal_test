
const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('isWeekday function', function() {
  it('isWeekday() should return true if the day passed is a weekday', function(){
    assert.deepEqual(isWeekday("Monday"), true);
  });
  it('isWeekday() should return true if the day passed is a weekday', function(){
    assert.deepEqual(isWeekday("Sunday"), false);
  });
});
