sceney = require('../lib/Sceney')

describe "Scene", ->
  it "should create a new instance", ->
    scene = new sceney.Scene('#surface')
    scene.elem.should.not.be.null
