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
