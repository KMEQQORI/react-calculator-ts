
# 🎉 react-calculator-ts

**`react-calculator-ts`** is a versatile calculator component built with TypeScript and React. It supports multiple types of calculators including simple, scientific, and offers customizable button colors. The component is designed for ease of use, and both basic arithmetic and advanced scientific functions are supported.

[**Live Demo**](https://kmeqqori.github.io/react-calculator-ts-example)

![Screenshot of React Scientific Calculator](https://raw.githubusercontent.com/KMEQQORI/react-calculator-ts/main/assets/images/image.png)

## 🚀 Installation

To add **`react-calculator-ts`** to your project, run the following command:

```bash
npm install react-calculator-ts
```

## 📖 Usage

### Example Code

Here’s how to use **`ReactCalculator`**, which allows you to select between different calculator types, in your React project.

```tsx
import React from 'react';
import { ReactCalculator } from 'react-calculator-ts';

const App = () => (
  <div>
    <h1>My Calculator</h1>
    <ReactCalculator 
      type="scientific"                 // Choose between 'simple', 'scientific', 'graphing', 'programmer'
      numberButtonColor="#34d399"       // Optional: Green color for number buttons
      operationButtonColor="#f97316"    // Optional: Orange color for operation buttons
      clearButtonColor="#3b82f6"        // Optional: Blue color for the clear button
      equalButtonColor="#10b981"        // Optional: Green color for the equal button
      scientificButtonColor="#384B70"   // Optional: Blue-gray color for scientific function buttons
    />
  </div>
);

export default App;
```

## 🛠️ Methods

### Customizable Props

The **`ReactCalculator`** component accepts the following optional props for UI customization:

- **`type` (String):** Specifies the calculator type. Supported values are `'simple'`, `'scientific'`, `'graphing'` (not implemented), and `'programmer'` (not implemented).
- **`numberButtonColor` (String):** Hex or RGB color for the number buttons (default: `#4b5563`).
- **`operationButtonColor` (String):** Hex or RGB color for the operation buttons (default: `#ef4444`).
- **`equalButtonColor` (String):** Hex or RGB color for the equal button (default: `#10b981`).
- **`clearButtonColor` (String):** Hex or RGB color for the clear button (default: `#f59e0b`).
- **`scientificButtonColor` (String):** Hex or RGB color for the scientific function buttons (only for the scientific calculator, default: `#384B70`).

### Calculator Types

- **Simple Calculator:** Basic arithmetic operations (addition, subtraction, multiplication, division).

  Example usage of the simple calculator:

  ```tsx
  import React from 'react';
  import { ReactCalculator } from 'react-calculator-ts';

  const App = () => (
    <div>
      <h1>Simple Calculator</h1>
      <ReactCalculator 
        type="simple" 
        numberButtonColor="#4b5563" 
        operationButtonColor="#ef4444" 
        clearButtonColor="#f59e0b"
        equalButtonColor="#10b981"
      />
    </div>
  );

  export default App;
  ```

- **Scientific Calculator:** Supports both basic operations and advanced functions like square root, powers, trigonometric calculations, and logarithms.

  Example usage of the scientific calculator:

  ```tsx
  import React from 'react';
  import { ReactCalculator } from 'react-calculator-ts';

  const App = () => (
    <div>
      <h1>Scientific Calculator</h1>
      <ReactCalculator 
        type="scientific"
        numberButtonColor="#4b5563"
        operationButtonColor="#ef4444"
        clearButtonColor="#f59e0b"
        equalButtonColor="#10b981"
        scientificButtonColor="#384B70"
      />
    </div>
  );

  export default App;
  ```

- **Graphing Calculator (Not Yet Implemented):** Future functionality for plotting graphs.
- **Programmer Calculator (Not Yet Implemented):** Future functionality for binary, hexadecimal, and other programmer-specific operations.

## 📌 Notes

This component is designed for educational and simple application use cases. Make sure to pass valid CSS color strings (e.g., `#34d399`, `rgb(52, 211, 153)`) for button color customization.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or improvements for the component.

## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for more details.

![Tests](https://github.com/mon-utilisateur/react-calculator-ts/actions/workflows/ci.yml/badge.svg)
[![Coverage](https://codecov.io/gh/mon-utilisateur/react-calculator-ts/branch/main/graph/badge.svg)](https://codecov.io/gh/mon-utilisateur/react-calculator-ts)

## 👤 Author

**Khalil MEQQORI** - Module Creator  
For more information or questions, please open an issue on the GitHub repository or contact me at **meqqorikhalil@gmail.com**.
