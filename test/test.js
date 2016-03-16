var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var fs = require('fs');
var parse = require('../src/parse.js');

describe('content', function() {

  it('0-hello-world', function() {

    var ink = readInk('0-hello-world');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);

    var text = story.continue();

    expect(text).to.equal('Hello world!');

    expect(story.canContinue).to.equal(false);
  });

  it('1-multiline', function() {

    var ink = readInk('1-multiline');
    var story = parse(ink);

    expect(story.canContinue).to.equal(true);

    var text1 = story.continue();
    var text2 = story.continue();
    var text3 = story.continue();

    expect(text1).to.equal('Hello, world!');
    expect(text2).to.equal('Hello?');
    expect(text3).to.equal('Hello, are you there?');

    expect(story.canContinue).to.equal(false);
  });


});


function readInk(file) {
  return fs.readFileSync('./test/ink/' + file + '.ink', 'utf-8');
}