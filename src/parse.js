var Story = require('./Story.js');
var Node = require('./Node.js');

function parse(text) {

  var lines = text.split("\n");

  var story = new Story();

  lines.forEach(function(line) {

    if(isComment(line)) {
      return;
    }

    var node = new Node();
    node.content = line;
    story.stack.unshift(node);
  });

  return story;
}

isComment()

module.exports = parse;