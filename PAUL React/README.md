# PAUL React Component Library

Welcome to the official **PAUL React Component Library**! This project is part of the **PAUL (Pattern & Asset UI Library)** ecosystem, providing high-quality, reusable, and accessible React components for building consistent user interfaces.

## 🚀 Overview

PAUL React is a modern React component library built with **TypeScript**, **Vite**, and **Vitest**. It's designed to be lightweight, performant, and easy to use. The library is licensed under **GPL-3.0**, ensuring it remains free and open-source for everyone.

- **Type Safe**: Fully written in TypeScript for excellent developer experience.
- **Modern Tooling**: Powered by Vite for fast development and optimized builds.
- **Tested**: Comprehensive test suite using Vitest and React Testing Library.
- **Storybook Integration**: Complemented by the existing [PAUL Storybook](../PAUL%20Storybook) for visual documentation and component experimentation.

---

## 🏁 Getting Started

This section will help you set up the environment and start using PAUL React in your projects.

### 📋 System Requirements

Before you begin, ensure your development environment meets the following requirements:

- **Node.js**: Version 18.0.0 or later.
- **Package Manager**: [pnpm](https://pnpm.io/) version 8.0.0 or later (recommended). Alternatively, you can use `npm` or `yarn`.
- **Operating System**: macOS, Linux, or Windows (WSL recommended for Windows).

### ⚙️ Environment Setup

If you are contributing to this library, follow these steps to set up your local development environment:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/simonpauls/PAUL-UI.git
    cd PAUL-UI
    ```
2.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
3.  **Local Development Server**:
    Start the local server to test components in a playground environment:
    ```bash
    pnpm dev
    ```
    This will launch the application at `http://localhost:5173`.

---

### 📦 Installation (For Consumers)

To use PAUL React in an existing React project, install the package and its peer dependencies:

```bash
# Using pnpm (Recommended)
pnpm add @paul/react react-aria-components

# Using npm
npm install @paul/react react-aria-components

# Using yarn
yarn add @paul/react react-aria-components
```

**Note**: `react` and `react-dom` (>=18.0.0) are required peer dependencies and should be installed in your project.

---

### 🛠 Configuration Guidelines

To ensure components are styled correctly, you must import the library's CSS in your application's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
// src/main.tsx or src/App.tsx
import '@paul/react/style.css';
```

#### TypeScript Configuration
If you are using TypeScript, ensure your `tsconfig.json` is configured to support modern ESM features:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}
```

---

## 🧩 Components

PAUL React provides a wide range of accessible components out of the box:

### Primitives
- **Accordion**, **Avatar**, **Button**, **Checkbox**, **Dialog**, **Field**, **Icon**, **IconButton**, **Image**, **Input**, **Keyboard**, **Link**, **ListBox**, **Logo**, **Menu**, **Navigation**, **Notification**, **Pagination**, **Radio**, **Search**, **Select**, **Slider**, **Switch**, **Tab**, **Table**, **Tag**, **Text**, **Textarea**, **Tooltip**

### Layout
- **Flex**, **Grid**, **Section**

### Compositions
- **Cards**, **Headers**, **Footers**, **Heroes**

---

### 📖 Basic Usage Examples

Here are some examples of how to use PAUL components in your React application:

#### Using a Button
```tsx
import { Button } from '@paul/react';

function MyComponent() {
  return (
    <Button onPress={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

#### Using a Tooltip
```tsx
import { Tooltip, TooltipTrigger, Button } from '@paul/react';

function HelpButton() {
  return (
    <TooltipTrigger>
      <Button variant="subtle">Help</Button>
      <Tooltip>Click for more information</Tooltip>
    </TooltipTrigger>
  );
}
```

---

## 🏗 Component Development

Each component in the library follows a strict structure for consistency and maintainability:

- `src/components/[ComponentName]/`
  - `[ComponentName].tsx`: The main component implementation using `react-aria-components`.
  - `[ComponentName].test.tsx`: Unit tests using Vitest and React Testing Library.
  - `[ComponentName].css`: Component-specific styles.
  - `index.ts`: Entry point for exporting the component.

### 🧪 Running Tests
We maintain a high standard of quality through comprehensive testing.
```bash
# Run all tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### 🔨 Building for Production
To generate the production-ready build (ESM and UMD formats):
```bash
pnpm build
```

### 🎨 Running the Demo
To see a live demo of the components, ensure you are in the `PAUL React` directory and run:
```bash
cd "PAUL React"
pnpm demo
```
This will start a local server at `http://localhost:8000`.

---

## 🤝 Contribution Guidelines

We welcome contributions! To contribute:

1. **Fork** the repository.
2. **Create a feature branch**: `git checkout -b feature/awesome-feature`.
3. **Commit your changes**: `git commit -m 'feat: add awesome component'`.
4. **Push to the branch**: `git push origin feature/awesome-feature`.
5. **Open a Pull Request**.

Please ensure your code follows the established patterns, passes all tests, and includes relevant documentation.

## 🔗 Additional Resources

- **[PAUL Storybook](../PAUL%20Storybook)**: Interactive documentation and component playground.
- **[React Aria Components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html)**: The foundation for our accessible components.
- **[Vite Documentation](https://vitejs.dev/)**: Information on the build tool used.
- **[Vitest Documentation](https://vitest.dev/)**: Information on the testing framework.

---

Built with ❤️ by the PAUL Team.
