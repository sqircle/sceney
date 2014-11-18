PropertyAccessors = require 'property-accessors'

class Node
  PropertyAccessors.includeInto(this)

  constructor: () ->
    @children = []
    @parent   = null
  
  init: ->
    # stub

  addChild: (child) =>
    child.parent = this
    child.init?()
    @children.push(child)

  render: ->
    for child in @children
      child.render()

module.exports = Node
