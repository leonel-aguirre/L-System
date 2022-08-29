import { LINE_LENGTH } from "../constants"

// variables : F G
// constants : + −
// start  : F−G−G
// rules  : (F → F−G+F+G−F), (G → GG)
// angle  : 120°

export default {
  alphabet: ["F", "G", "+", "-"],
  initiator: "F-G-G",
  rules: [
    { from: "F", to: "F-G+F+G-F" },
    { from: "G", to: "GG" },
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
      trigger: "G",
      action: (p) => {
        p.line(0, 0, 0, -LINE_LENGTH)
        p.translate(0, -LINE_LENGTH)
      },
    },
    {
      trigger: "+",
      action: (p) => {
        p.rotate(p.radians(-120))
      },
    },
    {
      trigger: "-",
      action: (p) => {
        p.rotate(p.radians(120))
      },
    },
  ],
}
