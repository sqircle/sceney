$ = require('jquery')

$('document').ready ->
  sceney    = require('../../lib/Sceney')
  ImageNode = require('../../lib/sceney/nodes/ImageNode')
  scene   = new sceney.Scene($('#scene'))
  surface = scene.newCanvasSurface(500, 333)
  image   = new ImageNode('dist/images/Owl.jpg')
  surface.addChild(image)
  scene.render()
