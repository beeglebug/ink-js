var Story = require('./Story.js');
var Node = require('./Node.js');

var Parser = function() {};

Parser.prototype.parse = function(text) {

  var lines = text.split("\n");

  var story = new Story();

  var node = new Node();

  node.content = lines[0];

  story.stack.push(node);

  return story;
};

module.exports = Parser;