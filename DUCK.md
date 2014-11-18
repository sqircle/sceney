For vector, stick to a structure that mirrors SVG. Then if a user wants SVG features like a gradient mesh, they create an SVG surface.

UI is a seperate entity it relies on the API of the nodes to figure things out.
e.g selection tool selects some elements. ask Document node which nodes are in the selection boundaries.
Then it highlights those nodes and maintainsUse Snap.svg to render  them in the tool.

Use Snap.svg to render svg on the svg surface.

All operations should be easily serialized for an undo/redo system.

    {
      "type": "shape:addPoint()", "id": "", index": [5], "arguments": ""
    }


The index is an array that helps traverse. Just call getChildren to the length of the array and
each time through the loop get the index. Preferably though the root node has ids for every node.

To undo then we just go through the operations to get through to the current point

Use Posn for a position point. Then a true point class for vector stuff

For the most part all our display methods should have rotate, scale, setZoom etc methods. During
render it should figure out how to turn these values into something the surface it is on understands.

## What we need

we just need the scene graph then UI and features can be built simultaneously until we have reached a prototype.
Nodes can get APi as the tools need them.
Surfaces get more API as we need to draw on them.
Scene graph has surfaces and nodes. nodes render to the surfaces

The first step is to get an image node rendering to a canvas surface.
then get it rendering with transformation matrix.
then add another node and another

### Nodes

#### Base Class

transformation matrix.
bounds
position
width, height

#### SVGNode

Holds an SVG object with string etc.

#### ImageNode

Holds an image

#### LayerNode

We can draw on it

### Surfaces

Minimal for now expand their api as need

#### SVGSurface
#### WebGLSuface
#### CanvasSurface

## Ideas

Typo Effects Like:
http://tympanus.net/Tutorials/InteractiveTypographyEffects/index4.html

Lighting using illuminated.js and then a zen photo garden type mode.

## API Design

    sceney = require('sceney')
    scene = new sceney.Scene($('#wrapper'))
    surface = scene.newCanvasSurface()
    image = new ImageNode('images/Owl.png')
    surface.addChild(image)
    scene.render()

## TODOS

- [ ] Image rendering demo

### Other

- [ ] Add travis CI
- [ ] Add Hound
- [ ] get some tests added
- [ ] add Coffee-jshint
- [ ] add coffeelint
