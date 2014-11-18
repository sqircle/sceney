DisplayNode = require('./DisplayNode')

class ImageNode extends DisplayNode
  constructor: (imageOrString) ->
    super

    @image = null
    @loaded = false
    @clippingX = 0
    @clippingY = 0
    @width =  0
    @height = 0
    @rotation = undefined
    @translation = undefined

    if typeof imageOrString is "string"
      @image = new Image()

      @image.onload = =>
        @setWidthAndHeight()

      @image.src = imageOrString
    else
      @image = imageOrString
      @setWidthAndHeight()

  setWidthAndHeight: ->
    @loaded = true
    @width  = @image.width
    @height = @image.height

  renderCanvas: (renderer) =>
    unless @loaded
      setTimeout((self, renderer) ->
        self.renderCanvas(renderer)
      , 100, this, renderer)
      return 

    if @transform or @translation or @rotation
      renderer.save()

      renderer.rotate(@rotation.angle)                   if @rotation 
      renderer.translate(@translation.x, @translation.y) if @translation

      if @transform
        renderer.setTransform(@transform.a, @transform.b, @transform.c, @transform.d, @transform.e, 
                              @transform.e, @transform.f)
    
    renderer.ctx.drawImage(@image, @clippingX, @clippingY, @width, @height)

module.exports = ImageNode
