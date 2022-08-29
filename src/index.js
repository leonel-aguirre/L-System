import "./index.css"

import p5 from "p5"

import { WIDTH, HEIGHT } from "./constants"
import LSystem from "./LSystem/LSystem"
import Data from "./data/map"

const lSystemsSet = []

for (const key in Data) {
  if (Object.hasOwnProperty.call(Data, key)) {
    lSystemsSet.push({ ...Data[key], name: key })
  }
}

const config = {
  lineLength: 10,
  currentLSystem: lSystemsSet[0],
}

const lineLengthInput = document.querySelector("#lineLength")
const currentLSystemSelect = document.querySelector("#currentLSystem")

const lineLengthValue = document.querySelector("#lineLengthValue")
const rawDataValue = document.querySelector("#lSystemRawData")

let lSystem

lineLengthInput.addEventListener("change", ({ target }) => {
  config.lineLength = target.value

  updateUI()
})

currentLSystemSelect.addEventListener("change", ({ target }) => {
  config.currentLSystem = lSystemsSet.find(
    (lSystem) => lSystem.name === target.value
  )

  setCurrentLSystem()
  updateUI()
})

const setCurrentLSystem = () => {
  const { alphabet, initiator, rules, instructions } = config.currentLSystem

  lSystem = new LSystem(alphabet, initiator, rules, instructions)
}

const updateUI = () => {
  const { alphabet, initiator, rules } = config.currentLSystem

  lineLengthValue.textContent = config.lineLength
  lineLengthInput.value = config.lineLength

  rawDataValue.textContent = JSON.stringify(
    { alphabet, initiator, rules },
    null,
    2
  )
}

const populateLSystemSelect = () => {
  lSystemsSet.forEach((lSystem) => {
    const { name } = lSystem

    const newOption = document.createElement("option")
    newOption.textContent = name
    newOption.value = name

    currentLSystemSelect.appendChild(newOption)
  })
}

/**
 * Displays a p5 sketch.
 *
 * @param {p5} p p5 object reference.
 */
const sketch = (p) => {
  // Editable values.

  // Sketch setup.
  p.setup = () => {
    let canvas = p.createCanvas(WIDTH, HEIGHT)
    canvas.parent("Canvas")
    p.translate(WIDTH / 2, HEIGHT / 2)
    p.background("white")

    setCurrentLSystem()
    populateLSystemSelect()
    updateUI()

    // const lSystemIteration = 3

    // console.log(lSystem.getIterationValue(lSystemIteration))
  }

  // Draw loop.
  p.draw = () => {
    p.background("#FFF")

    p.translate(WIDTH / 2, HEIGHT / 2)

    LSystem.drawLSystemPattern(p, lSystem, 3, config)
  }
}

new p5(sketch)
