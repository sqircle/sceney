Delegato = require('delegato')

Surface = require('./Surface')

class CanvasSurface extends Surface
  Delegato.includeInto(this)
  
  constructor: (@width=256, @height=256, @position) ->
    super
    
    @canvas = document.createElement('canvas')
    @canvas.width  = @width
    @canvas.height = @height
    
    @ctx = @canvas.getContext('2d')    

    # @position = new Point(0, 0) unless @position
    # @delegatesProperties 'x', 'y', toObject: @position
    @delegatesProperties 'elem', toProperty: @canvas

    @delegatesMethods('clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText', 'measureText', 'getLineDash', 
                      'setLineDash',  'createLinearGradient', 'createRadialGradient', 'createPattern', 'beginPath', 
                      'closePath', 'moveTo', 'lineTo', 'bezierCurveTo', 'quadraticCureTo', 'arc', 'arcTo', 'ellipse', 
                      'rect', 'fill', 'stroke', 'clip', 'resetClip','isPointInPath', 'isPointInStroke', 'drawImage', 
                      'createImageData', 'getImageData','putImageData',
                      toObject: @ctx)

    @delegatesProperties('lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign',
                         'textBaseline', 'direction', 'fillStyle', 'strokeStyle', 'shadowBlur', 'shadowColor', 
                         'shadowOffsetX', 'shadowOffsetY', 'globalAlpha', 'globalCompositeOpertation', 'canvas', 
                         toObject: @ctx)

  render: ->
    for child in @children 
      child.renderCanvas(@)

module.exports = CanvasSurface
