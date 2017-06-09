var chai = require('chai');
var expect = chai.expect;

describe('Test', function() {
  it('log project username', function() {
    console.log(process.env["CIRCLE_PROJECT_USERNAME"]);
  });

  it('log reponame', function() {
    console.log(process.env["CIRCLE_PROJECT_REPONAME"]);
  });

  it('log pull request username', function() {
    console.log(process.env["CIRCLE_PR_USERNAME"]);
  });

  it('log pull request reponame', function() {
    console.log(process.env["CIRCLE_PR_REPONAME"]);
  });

  it('type of 1 + 1 is a number', function() {
    expect(1 + 1).to.be.a('number');
  });

  it('1 + 1 = 2', function() {
    expect(1 + 1).to.equal(2);
  });
});
