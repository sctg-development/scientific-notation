import { ScientificNotation } from "../src/scientific";

describe("ScientificNotation", () => {
  describe("toScientificNotation", () => {
    test("handles zero correctly", () => {
      expect(ScientificNotation.toScientificNotation(0)).toEqual({
        mantissa: 0,
        exponent: 0,
      });
    });

    test("converts simple numbers correctly", () => {
      expect(ScientificNotation.toScientificNotation(1234, 3)).toEqual({
        mantissa: 1.23,
        exponent: 3,
      });
    });

    test("handles negative numbers", () => {
      expect(ScientificNotation.toScientificNotation(-1234, 3)).toEqual({
        mantissa: -1.23,
        exponent: 3,
      });
    });
  });

  describe("toMantissaString", () => {
    test("formats mantissa with correct precision", () => {
      expect(ScientificNotation.toMantissaString(1.23, 6)).toBe("1.23000");
      expect(ScientificNotation.toMantissaString(1.23, 4)).toBe("1.230");
      expect(ScientificNotation.toMantissaString(123, 4)).toBe("123.0");
      expect(ScientificNotation.toMantissaString(123, 3)).toBe("123");
      expect(ScientificNotation.toMantissaString(123, 2)).toBe("123");
    });
  });

  describe("toScientificNotationString", () => {
    test("formats numbers in scientific notation", () => {
      expect(
        ScientificNotation.toScientificNotationString(-1234567890.123456789, 3),
      ).toBe("-1.23e9");
      expect(
        ScientificNotation.toScientificNotationString(1234567890.123456789, 3),
      ).toBe("1.23e9");
      expect(
        ScientificNotation.toScientificNotationString(1230017890.123456789, 5),
      ).toBe("1.2300e9");
    });
  });

  describe("toScientificNotationLatex", () => {
    test("formats numbers in LaTeX notation", () => {
      expect(
        ScientificNotation.toScientificNotationLatex(-1234567890.123456789, 3),
      ).toBe("-1.23 \\times 10^{9}");
      expect(
        ScientificNotation.toScientificNotationLatex(1234567890.123456789, 3),
      ).toBe("1.23 \\times 10^{9}");
      expect(ScientificNotation.toScientificNotationLatex(1000, 3)).toBe(
        "1.00 \\times 10^{3}",
      );
      expect(ScientificNotation.toScientificNotationLatex(10, 3)).toBe("10.0");
      expect(ScientificNotation.toScientificNotationLatex(-10, 3)).toBe(
        "-10.0",
      );
    });
  });

  describe("toScientificNotationMathML", () => {
    test("formats numbers in MathML notation", () => {
      expect(
        ScientificNotation.toScientificNotationMathML(1234567890.123456789, 3),
      ).toBe(
        "<math><mrow><mn>1.23</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math>",
      );
      expect(
        ScientificNotation.toScientificNotationMathML(-1234567890.123456789, 3),
      ).toBe(
        "<math><mrow><mn>-1.23</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math>",
      );
      expect(ScientificNotation.toScientificNotationMathML(1000, 3)).toBe(
        "<math><mrow><mn>1.00</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>",
      );
      expect(ScientificNotation.toScientificNotationMathML(-1000, 3)).toBe(
        "<math><mrow><mn>-1.00</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>",
      );
    });
  });

  describe("toScientificNotationHTML", () => {
    test("formats numbers in HTML notation", () => {
      expect(
        ScientificNotation.toScientificNotationHTML(1234567890.123456789, 3),
      ).toBe("1.23 × 10<sup>9</sup>");
      expect(
        ScientificNotation.toScientificNotationHTML(1234567890.123456789, 5),
      ).toBe("1.2346 × 10<sup>9</sup>");
      expect(
        ScientificNotation.toScientificNotationHTML(-1234567890.123456789, 5),
      ).toBe("-1.2346 × 10<sup>9</sup>");
      expect(ScientificNotation.toScientificNotationHTML(1000, 3)).toBe(
        "1.00 × 10<sup>3</sup>",
      );
    });
  });
});
