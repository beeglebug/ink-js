var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var fs = require('fs');
var Parser = require('../Parser.js');

describe('content', function() {

  it('0-hello-world', function() {

    var ink = readInk('0-hello-world');
    var parser = new Parser();
    var story = parser.parse(ink);

    expect(story.canContinue).to.be.true;

    var text = story.continue();

    expect(text).to.equal('Hello world!');

  });
});


function readInk(file) {
  return fs.readFileSync('./test/ink/' + file + '.ink', 'utf-8');
}