Delegato = require('delegato')

Node = require('./Node')

class DisplayNode extends Node
  Delegato.includeInto(this)
  @delegatesProperties 'surface', toProperty: 'parent'

  constructor: ->
    super
		# @position  = new Posn()
		# @transform = new Transform(@)
		# @bounds    = new Rectangle()

		@delegatesProperties 'scaleX', 'scaleY', 'scaleZ', toObject: @transform
		@delegatesProperties 'rotationX', 'rotationY', 'rotationZ', 'rotation', toObject: @transform

    @delegatesProperties 'alpha', toObject: @transform

module.exports = DisplayNode
