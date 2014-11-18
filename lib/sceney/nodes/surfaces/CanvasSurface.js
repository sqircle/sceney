var CanvasSurface, Delegato, Surface,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Delegato = require('delegato');

Surface = require('./Surface');

CanvasSurface = (function(_super) {
  __extends(CanvasSurface, _super);

  Delegato.includeInto(CanvasSurface);

  function CanvasSurface(width, height, position) {
    this.width = width != null ? width : 256;
    this.height = height != null ? height : 256;
    this.position = position;
    CanvasSurface.__super__.constructor.apply(this, arguments);
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');
    this.delegatesProperties('elem', {
      toProperty: this.canvas
    });
    this.delegatesMethods('clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText', 'measureText', 'getLineDash', 'setLineDash', 'createLinearGradient', 'createRadialGradient', 'createPattern', 'beginPath', 'closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCureTo', 'arc', 'arcTo', 'ellipse', 'rect', 'fill', 'stroke', 'clip', 'resetClip', 'isPointInPath', 'isPointInStroke', 'drawImage', 'createImageData', 'getImageData', 'putImageData', {
      toObject: this.ctx
    });
    this.delegatesProperties('lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline', 'direction', 'fillStyle', 'strokeStyle', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'globalAlpha', 'globalCompositeOpertation', 'canvas', {
      toObject: this.ctx
    });
  }

  CanvasSurface.prototype.render = function() {
    var child, _i, _len, _ref, _results;
    _ref = this.children;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      _results.push(child.renderCanvas(this));
    }
    return _results;
  };

  return CanvasSurface;

})(Surface);

module.exports = CanvasSurface;
