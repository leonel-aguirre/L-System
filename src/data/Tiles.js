import { LINE_LENGTH } from "../constants"

// variables : F G
// constants : + −
// start  : F−G−G
// rules  : (F → F−G+F+G−F), (G → GG)
// angle  : 120°

export default {
  alphabet: ["F", "+", "-"],
  initiator: "F+F+F+F",
  rules: [{ from: "F", to: "FF+F-F+F+FF" }],
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
        p.rotate(p.radians(-90))
      },
    },
    {
      trigger: "-",
      action: (p) => {
        p.rotate(p.radians(90))
      },
    },
  ],
}
