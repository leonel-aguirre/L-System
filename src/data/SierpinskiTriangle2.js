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
      action: (p, { lineLength }) => {
        p.line(0, 0, 0, -lineLength)
        p.translate(0, -lineLength)
      },
    },
    {
      trigger: "G",
      action: (p, { lineLength }) => {
        p.line(0, 0, 0, -lineLength)
        p.translate(0, -lineLength)
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
