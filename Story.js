var Story = function() {

  this.hasChoices = false;
  this.currentChoices = [];
  this.variablesState = [];
  this.stack = [];
};

Object.defineProperty(Story.prototype, 'canContinue', {

  get: function () {
    return true;
  }
});


Story.prototype.continue = function() {
  var node = this.stack.pop();
  return node.content;
};

Story.prototype.chooseChoiceIndex = function(index) {

};

Story.prototype.choosePathString = function(string) {

};

Story.prototype.observeVariable = function(variable, callback) {
  var newValue = 0;
  callback(variable, newValue);
};

Story.prototype.bindExternalFunction = function(name, callback) {

};

module.exports = Story;