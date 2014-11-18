$ = require('jquery')

CanvasSurface = require('./nodes/surfaces/CanvasSurface')
Node          = require('./nodes/Node')

class Scene extends Node
  constructor: (elem) ->
    super
    
    if elem instanceof String
      @elem = $(elem)
    else
      @elem = elem

  newCanvasSurface: (args...) ->
    surface = new CanvasSurface(args...)
    @addChild(surface)
    @elem.append(surface.canvas)
    surface

module.exports = Scene
