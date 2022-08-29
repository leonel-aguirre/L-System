import { LINE_LENGTH } from "../constants"

// variables : F G
// constants : + −
// start  : F
// rules  : (F → F+G), (G → F-G)
// angle  : 90°

export default {
  alphabet: ["F", "G", "+", "-"],
  initiator: "F",
  rules: [
    { from: "F", to: "F+G" },
    { from: "G", to: "F-G" },
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
