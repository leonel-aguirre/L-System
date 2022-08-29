import { LINE_LENGTH } from "../constants"

// variables : F G
// constants : + −
// start  : F−G−G
// rules  : (F → F−G+F+G−F), (G → GG)
// angle  : 120°

export default {
  alphabet: ["F", "G", "+", "-"],
  initiator: "F",
  rules: [
    { from: "F", to: "G-F-G" },
    { from: "G", to: "F+G+F" },
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
        p.rotate(p.radians(-60))
      },
    },
    {
      trigger: "-",
      action: (p) => {
        p.rotate(p.radians(60))
      },
    },
  ],
}
