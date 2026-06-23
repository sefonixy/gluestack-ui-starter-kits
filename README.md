# GamaLearn UI — Component Library & Showcase Monorepo

Welcome to the **GamaLearn UI** monorepo. This project is a single-source-of-truth workspace containing a custom design system, React Native component library, and an Expo application showcase. It is fully optimized to run seamlessly on both **macOS** and **Windows** development environments.

---

## 🏗 Repository Architecture

The monorepo structure is located in the `gamalearn-ui` directory:

```text
gamalearn-ui/
├── apps/
│   └── expo-app/          # Expo showcase app (Sign In, Sign Up, God Card)
├── packages/
│   ├── components/       # Core design system UI components (gluestack-ui based)
│   ├── screens/          # Shared screens and complex layout cards
│   ├── hooks/            # Shared custom React hooks
│   └── shared/           # Common assets, configurations, and utilities
├── package.json          # Monorepo workspaces definition and scripts
└── yarn.lock
```

---

## ⚡️ Quick Start Guide

Follow these steps to set up and run the showcase application on your machine.

### 📋 Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **Yarn** (Classic v1.x)
- **Expo Go** app (optional, for testing on physical iOS/Android devices)

### 📥 1. Installation

Navigate into the `gamalearn-ui` directory and install the dependencies:

```bash
cd gamalearn-ui
yarn install
```

> [!NOTE]
> Yarn workspaces will automatically symlink packages in `packages/*` to `node_modules` so they resolve correctly across all applications.

### 🚀 2. Running the Expo Showcase

To start the development server, run:

```bash
yarn run:expo
```

This starts the Expo CLI. You can then:
- Press **`w`** to open the showcase in your web browser.
- Press **`a`** to open it on an Android emulator or device.
- Press **`i`** to open it on an iOS simulator.
- Scan the QR code with your phone's camera or Expo Go app to test on a physical device.

---

## 🪟 Windows Compatibility Features

Developing React Native / Expo projects in a monorepo on Windows often comes with unique challenges. This project has been pre-configured to handle them automatically:

1. **Cross-Platform Environment Variables (`cross-env`)**:
   Windows Command Prompt and PowerShell do not support inline environment variables (e.g., `EXPO_USE_METRO_WORKSPACE_ROOT=1 npx expo start`). We use `cross-env` to ensure these variables are injected correctly on all shells.
   
2. **Platform-Independent Metro Resolution**:
   The Metro bundler config (`gamalearn-ui/apps/expo-app/metro.config.js`) uses Node's standard `path` package (`path.resolve` and `__dirname`) to dynamically resolve workspace roots, automatically handling Windows backslash (`\`) and macOS forward slash (`/`) path separators.

3. **Workspace Node Modules Order**:
   Metro is configured with `nodeModulesPaths` pointing to both the local app `node_modules` and the monorepo root `node_modules` to guarantee seamless dependency resolution under Windows filesystems.

---

## 🎨 Design Theme & Colors

The design tokens and colors are based on the CheckPoint Design System, configured using Tailwind CSS and gluestack-ui. For detailed steps on modifying color palettes, configuring typography, and managing design token mappings, refer to [THEME_WALKTHROUGH.md](./THEME_WALKTHROUGH.md).
