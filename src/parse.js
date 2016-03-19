var Story = require('./Story.js');
var Node = require('./Node.js');
var Choice = require('./Choice.js');

function parse(text) {

  var lines = text.split("\n");

  var story = new Story();

  var _inComment = false;
  var _currentNode = null;
  var _currentChoice = null;

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

    if(line.startsWith('*')) {
      // add a choice to the last node
      _currentChoice = new Choice();
      _currentChoice.choiceText = removeChoiceMarker(line);
      _currentNode.choices.push(_currentChoice);
    } else {
      // start a new node
      _currentNode = new Node();
      _currentNode.content = line;
      story.stack.unshift(_currentNode);
    }
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

function removeChoiceMarker(line) {
  return line.replace(/^[\*\s]+/, '');
}

module.exports = parse;