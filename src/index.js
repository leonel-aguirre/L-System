import "./index.css"

import p5 from "p5"

/**
 * Displays a p5 sketch.
 *
 * @param {p5} p p5 object reference.
 */
const sketch = (p) => {
  // Editable values.
  const WIDTH = 600
  const HEIGHT = 600

  // Sketch setup.
  p.setup = () => {
    let canvas = p.createCanvas(WIDTH, HEIGHT)
    canvas.parent("Canvas")
  }

  // Draw loop.
  p.draw = () => {
    p.background("white")
  }
}

new p5(sketch)
