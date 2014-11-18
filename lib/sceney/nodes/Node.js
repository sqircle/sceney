var Node, PropertyAccessors,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PropertyAccessors = require('property-accessors');

Node = (function() {
  PropertyAccessors.includeInto(Node);

  function Node() {
    this.addChild = __bind(this.addChild, this);
    this.children = [];
    this.parent = null;
  }

  Node.prototype.init = function() {};

  Node.prototype.addChild = function(child) {
    child.parent = this;
    if (typeof child.init === "function") {
      child.init();
    }
    return this.children.push(child);
  };

  Node.prototype.render = function() {
    var child, _i, _len, _ref, _results;
    _ref = this.children;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      _results.push(child.render());
    }
    return _results;
  };

  return Node;

})();

module.exports = Node;
