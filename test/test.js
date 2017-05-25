var chai = require('chai');
var expect = chai.expect;

describe('Test', function() {
  it('typeof 1 + 1 is a number', function() {
    expect(1 + 1).to.be.a('number');
  });

  it('1 + 1 = 2', function() {
    expect(1 + 1).to.equal(2);
  });
});
