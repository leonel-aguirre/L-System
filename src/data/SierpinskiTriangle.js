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
