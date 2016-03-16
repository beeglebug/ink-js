var Story = require('./Story.js');
var Node = require('./Node.js');

function parse(text) {

  var lines = text.split("\n");

  var story = new Story();

  var _inComment = false;

  lines.forEach(function(line) {

    line = line.trim();

    // blank line
    if(line === '') { return; }

    if(isMultiLineCommentEnd(line)) {
      _inComment = false;
      return;
    }

    if(isMultiLineCommentStart(line)) {
      _inComment = true;
      return;
    }

    if(isSingleLineComment(line)) {
      return;
    }

    if(isTodo(line)) {
      return;
    }

    if(_inComment) {
      return;
    }

    var node = new Node();

    node.content = line;

    story.stack.unshift(node);
  });

  return story;
}

function isSingleLineComment(line) {
  return line.startsWith('//');
}

function isMultiLineCommentStart(line) {
  return line.startsWith('/*');
}

function isMultiLineCommentEnd(line) {
  return line.endsWith('*/');
}

function isTodo(line) {
  return line.startsWith('TODO');
}

module.exports = parse;