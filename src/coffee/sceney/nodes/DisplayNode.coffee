Delegato = require('delegato')

Node = require('./Node')

class DisplayNode extends Node
  Delegato.includeInto(this)
  @delegatesProperties 'surface', toProperty: 'parent'

  constructor: ->
    super

module.exports = DisplayNode
