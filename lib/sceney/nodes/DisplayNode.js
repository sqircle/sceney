var Delegato, DisplayNode, Node,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Delegato = require('delegato');

Node = require('./Node');

DisplayNode = (function(_super) {
  __extends(DisplayNode, _super);

  Delegato.includeInto(DisplayNode);

  DisplayNode.delegatesProperties('surface', {
    toProperty: 'parent'
  });

  function DisplayNode() {
    DisplayNode.__super__.constructor.apply(this, arguments);
  }

  return DisplayNode;

})(Node);

module.exports = DisplayNode;
