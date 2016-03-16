var Story = require('./Story.js');
var Node = require('./Node.js');

var Parser = function() {};

Parser.prototype.parse = function(text) {

  var lines = text.split("\n");

  var story = new Story();

  lines.forEach(function(line) {
    var node = new Node();
    node.content = line;
    story.stack.unshift(node);
  });

  return story;
};

module.exports = Parser;