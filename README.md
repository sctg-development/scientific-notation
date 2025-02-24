# Scientific Notation Formatter

A TypeScript library for formatting numbers in various scientific notation representations including HTML, LaTeX, and MathML.

## Features

- Convert numbers to scientific notation with configurable precision
- Multiple output formats:
  - Standard scientific notation (e.g., `1.23e6`)
  - LaTeX (`1.23 \times 10^{6}`)
  - MathML (`<math><mrow><mn>1.23</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math>`)
  - HTML (`1.23 × 10<sup>6</sup>`)
- Precise control over significant figures
- Standardized exponents (steps of 3)
- Zero handling
- Typescript types included

## Installation

```bash
npm install @sctg/scientific-notation
```

## Usage

```typescript
import { ScientificNotation } from '@sctg/scientific-notation';

// Basic usage
const number = 1234567.89;
const precision = 4;

// Standard scientific notation
console.log(ScientificNotation.toScientificNotationString(number, precision));
// Output: "1.235e6"

// LaTeX format
console.log(ScientificNotation.toScientificNotationLatex(number, precision));
// Output: "1.235 \times 10^{6}"

// HTML format
console.log(ScientificNotation.toScientificNotationHTML(number, precision));
// Output: "1.235 × 10<sup>6</sup>"

// MathML format
console.log(ScientificNotation.toScientificNotationMathML(number, precision));
// Output: "<math><mrow><mn>1.235</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math>"
```

## API Reference

### `toScientificNotation(value: number, precision?: number): ScientificNotationNumber`

Converts a number to scientific notation components.

```typescript
const result = ScientificNotation.toScientificNotation(1234.56, 3);
// Returns: { mantissa: 1.23, exponent: 3 }
```

### `toScientificNotationString(value: number, precision?: number): string`

Returns a string representation in scientific notation.

### `toScientificNotationLatex(value: number, precision?: number): string`

Returns a LaTeX formatted string.

### `toScientificNotationMathML(value: number, precision?: number): string`

Returns a MathML formatted string.

### `toScientificNotationHTML(value: number, precision?: number): string`

Returns an HTML formatted string.

## Types

```typescript
type ScientificNotationNumber = {
  mantissa: number;  // The coefficient
  exponent: number;  // The power of 10
};
```

## Features

- Standardizes exponents in steps of 3
- Maintains precision with trailing zeros
- Handles special cases (zero, small numbers)
- Type-safe with TypeScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright (c) 2024-2025 Ronan LE MEILLAT

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Author

Ronan LE MEILLAT  
SCTG Development

## Related Projects

- [@sctg/aga8-js](https://github.com/sctg-development/aga8-js) - GERG-2008 equations of state
- [flow-dilution](https://github.com/sctg-development/flow-dilution) - Gas flow dilution calculator
