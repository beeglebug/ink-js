var it = require('mocha').it;
var expect = require('chai').expect;
var fs = require('fs');
var parse = require('../src/parse.js');

module.exports = function() {

  it('single choice', function() {

    var ink = fs.readFileSync('./test/ink/choice/single.ink', 'utf-8');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);
    expect(story.continue()).to.equal('Hello world!');
    expect(story.canContinue).to.equal(false);
    expect(story.currentChoices).to.have.length(1);
    var choice = story.currentChoices[0];
    expect(choice.choiceText).to.equal('Hello back!');
    story.chooseChoiceIndex(0);
    expect(story.continue()).to.equal('Nice to hear from you!');
    expect(story.canContinue).to.equal(false);
  });
};

