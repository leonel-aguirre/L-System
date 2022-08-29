import "./index.css"

import p5 from "p5"

import { WIDTH, HEIGHT } from "./constants"
import LSystem from "./LSystem/LSystem"
import FractalPlant1 from "./data/FractalPlant1"
import FractalPlant2 from "./data/FractalPlant2"
import DragonCurve from "./data/DragonCurve"
import SierpinskiTriangle from "./data/SierpinskiTriangle"
import SierpinskiTriangle2 from "./data/SierpinskiTriangle2"
import Tiles from "./data/Tiles"

/**
 * Displays a p5 sketch.
 *
 * @param {p5} p p5 object reference.
 */
const sketch = (p) => {
  // Editable values.

  let lSystem

  // Sketch setup.
  p.setup = () => {
    let canvas = p.createCanvas(WIDTH, HEIGHT)
    canvas.parent("Canvas")
    p.translate(WIDTH / 2, HEIGHT / 2)

    const { alphabet, initiator, rules, instructions } = Tiles

    lSystem = new LSystem(alphabet, initiator, rules, instructions)

    const lSystemIteration = 3

    console.log(lSystem.getIterationValue(lSystemIteration))

    LSystem.drawLSystemPattern(p, lSystem, lSystemIteration)
  }

  // Draw loop.
  p.draw = () => {}
}

new p5(sketch)
