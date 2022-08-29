import { LINE_LENGTH } from "../constants"

// variables : F
// constants : + − [ ]
// start  : F
// rules  : (F → FF+[+F-F-F]-[-F+F+F])
// angle  : 30°

export default {
  alphabet: ["F", "+", "-", "[", "]"],
  initiator: "F",
  rules: [{ from: "F", to: "FF+[+F-F-F]-[-F+F+F]" }],
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
        p.rotate(p.radians(30))
      },
    },
    {
      trigger: "-",
      action: (p) => {
        p.rotate(p.radians(-30))
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
