var Story = function() {

  this.currentChoices = null;
  this.currentContent = null;
  this.stack = [];
};

Object.defineProperty(Story.prototype, 'canContinue', {
  get: function () {
    if(this.currentChoices !== null) { return false; }
    return this.stack.length > 0;
  }
});


Story.prototype.continue = function() {

  var node = this.stack.pop();

  var text = node.content;

  if(node.choices.length > 0) {
    this.currentChoices = node.choices;
  } else {
    this.currentContent = node;
  }


  return text;
};

Story.prototype.chooseChoiceIndex = function(index) {

};


module.exports = Story;