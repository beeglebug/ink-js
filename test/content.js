var it = require('mocha').it;
var expect = require('chai').expect;
var fs = require('fs');
var parse = require('../src/parse.js');

module.exports = function() {

  it('hello world', function() {

    var ink = fs.readFileSync('./test/ink/0-hello-world.ink', 'utf-8');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);
    expect(story.continue()).to.equal('Hello world!');
    expect(story.canContinue).to.equal(false);
  });

  it('multi line', function() {

    var ink = fs.readFileSync('./test/ink/1-multiline.ink', 'utf-8');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);
    expect(story.continue()).to.equal('Hello, world!');
    expect(story.continue()).to.equal('Hello?');
    expect(story.continue()).to.equal('Hello, are you there?');
    expect(story.canContinue).to.equal(false);
  });


  it('comments', function() {

    var ink = fs.readFileSync('./test/ink/2-comments.ink', 'utf-8');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);
    expect(story.continue()).to.equal('"What do you make of this?" she asked.');
    expect(story.continue()).to.equal('"I couldn\'t possibly comment," I replied.');
    expect(story.canContinue).to.equal(false);
  });

};
