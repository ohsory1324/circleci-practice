var chai = require('chai');
var expect = chai.expect;

describe('Test', function() {
  it('log project username', function() {
    console.log(process.env["CIRCLE_PROJECT_USERNAME"]);
  });

  it('log reponame', function() {
    console.log(process.env["CIRCLE_PROJECT_REPONAME"]);
  });

  it('log branch name', function() {
    console.log(process.env["CIRCLE_BRANCH"]);
  });

  it('log github username', function() {
    console.log(process.env["CIRCLE_USERNAME"]);
  });

  it('type of 1 + 1 is a number', function() {
    expect(1 + 1).to.be.a('number');
  });

  it('1 + 1 = 2', function() {
    expect(1 + 1).to.equal(2);
  });
});
