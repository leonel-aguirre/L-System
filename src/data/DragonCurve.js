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
