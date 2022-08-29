import p5 from "p5"

/**
 * Creates an L-System object.
 *
 * @param {String[]} alphabet The set of valid symbols for the L-System's alphabet.
 * @param {String} initiator The initial value of the L-System's string (axiom).
 * @param {Object[]} rules The rules that the L-System will use to transform the string.
 * @param {Object[]} instructions The instruction to be executed one the L-System's string is read.
 */
class LSystem {
  constructor(alphabet, initiator, rules, instructions) {
    this.alphabet = alphabet
    this.initiator = initiator
    this.rules = rules
    this.instructions = instructions
  }

  /**
   * Builds the string for the given iteration amount and returns it.
   *
   * @param {Number} n The amount of iterations.
   * @returns {String} A string containing the concatenation for the given amount n.
   */
  getIterationValue(n) {
    let currentString = this.initiator

    for (let i = 0; i < n; i++) {
      let characters = currentString.split("")

      const nextString = characters.reduce((current, nextCharacter) => {
        const matchingRule = this.rules.find(
          (rule) => rule.from === nextCharacter
        )

        return (current += matchingRule?.to || nextCharacter)
      }, "")

      currentString = nextString
    }

    return currentString
  }

  /**
   * Follows the drawing instructions based on both the given L-System's set of instructions and the pattern
   *
   * @param {p5} p A reference to the p5 object.
   * @param {LSystem} lSystem The L-System to be used.
   * @param {String} patternIteration The pattern to be drew.
   */
  static drawLSystemPattern(p, lSystem, patternIteration, config) {
    const stream = lSystem.getIterationValue(patternIteration).split("")

    stream.forEach((character) => {
      const foundInstruction = lSystem.instructions.find(
        (instruction) => instruction.trigger === character
      )

      foundInstruction?.action?.call(null, p, config)
    })
  }
}

export default LSystem
