var $, CanvasSurface, Node, Scene,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

$ = require('jquery');

CanvasSurface = require('./nodes/surfaces/CanvasSurface');

Node = require('./nodes/Node');

Scene = (function(_super) {
  __extends(Scene, _super);

  function Scene(elem) {
    Scene.__super__.constructor.apply(this, arguments);
    if (elem instanceof String) {
      this.elem = $(elem);
    } else {
      this.elem = elem;
    }
  }

  Scene.prototype.newCanvasSurface = function() {
    var args, surface;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    surface = (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(CanvasSurface, args, function(){});
    this.addChild(surface);
    this.elem.append(surface.canvas);
    return surface;
  };

  return Scene;

})(Node);

module.exports = Scene;
