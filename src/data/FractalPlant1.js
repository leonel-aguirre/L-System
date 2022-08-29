import { LINE_LENGTH } from "../constants"

// variables : X F
// constants : + − [ ]
// start  : X
// rules  : (X → F+[[X]-X]-F[-FX]+X), (F → FF)
// angle  : 25°

export default {
  alphabet: ["X", "F", "+", "-", "[", "]"],
  initiator: "X",
  rules: [
    { from: "X", to: "F+[[X]-X]-F[-FX]+X" },
    {
      from: "F",
      to: "FF",
    },
  ],
  instructions: [
    {
      trigger: "F",
      action: (p) => {
        p.line(0, 0, 0, -LINE_LENGTH)
        p.translate(0, -LINE_LENGTH)
      },
    },
    {
      trigger: "+",
      action: (p) => {
        p.rotate(p.radians(-25))
      },
    },
    {
      trigger: "-",
      action: (p) => {
        p.rotate(p.radians(25))
      },
    },
    {
      trigger: "[",
      action: (p) => {
        p.push()
      },
    },
    {
      trigger: "]",
      action: (p) => {
        p.pop()
      },
    },
  ],
}
