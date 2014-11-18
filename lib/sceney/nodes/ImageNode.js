var DisplayNode, ImageNode,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

DisplayNode = require('./DisplayNode');

ImageNode = (function(_super) {
  __extends(ImageNode, _super);

  function ImageNode(imageOrString) {
    this.renderCanvas = __bind(this.renderCanvas, this);
    ImageNode.__super__.constructor.apply(this, arguments);
    this.image = null;
    this.loaded = false;
    this.clippingX = 0;
    this.clippingY = 0;
    this.width = 0;
    this.height = 0;
    this.rotation = void 0;
    this.translation = void 0;
    if (typeof imageOrString === "string") {
      this.image = new Image();
      this.image.onload = (function(_this) {
        return function() {
          return _this.setWidthAndHeight();
        };
      })(this);
      this.image.src = imageOrString;
    } else {
      this.image = imageOrString;
      this.setWidthAndHeight();
    }
  }

  ImageNode.prototype.setWidthAndHeight = function() {
    this.loaded = true;
    this.width = this.image.width;
    return this.height = this.image.height;
  };

  ImageNode.prototype.renderCanvas = function(renderer) {
    if (!this.loaded) {
      setTimeout(function(self, renderer) {
        return self.renderCanvas(renderer);
      }, 100, this, renderer);
      return;
    }
    if (this.transform || this.translation || this.rotation) {
      renderer.save();
      if (this.rotation) {
        renderer.rotate(this.rotation.angle);
      }
      if (this.translation) {
        renderer.translate(this.translation.x, this.translation.y);
      }
      if (this.transform) {
        renderer.setTransform(this.transform.a, this.transform.b, this.transform.c, this.transform.d, this.transform.e, this.transform.e, this.transform.f);
      }
    }
    return renderer.ctx.drawImage(this.image, this.clippingX, this.clippingY, this.width, this.height);
  };

  return ImageNode;

})(DisplayNode);

module.exports = ImageNode;
