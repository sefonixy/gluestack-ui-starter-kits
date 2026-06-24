# GamaLearn UI — Component Library & Showcase Monorepo

Welcome to the **GamaLearn UI** monorepo. This project is a single-source-of-truth workspace containing a custom design system, React Native component library, and an Expo application showcase.

This codebase is designed and verified to run seamlessly on both **Windows (10/11)** and **macOS** development environments.

---

## 🏗 Repository Architecture

```text
gamalearn-ui/
├── apps/
│   └── expo-app/          # Expo showcase app (Sign In, Sign Up, God Card)
└── packages/
    └── components/       # Core React Native component library (gluestack-ui based)
```

---

## 💻 Environment Support Matrix

| OS | Supported Shells | Required Node Version | Package Manager | Native Emulators |
| :--- | :--- | :--- | :--- | :--- |
| **Windows 10/11** | PowerShell, CMD, Git Bash | Node `>= 18.x` | Yarn `v1.22.x` | Android Studio (AVD) |
| **macOS** | Zsh, Bash | Node `>= 18.x` | Yarn `v1.22.x` | iOS Simulator, Android AVD |

---

## ⚡️ Setup & Running Guide

### 1. Install Dependencies (Cross-Platform)

From the root of the project, navigate to the `gamalearn-ui` directory and install the packages:

```bash
cd gamalearn-ui
yarn install
```

> [!NOTE]
> Yarn workspaces will automatically configure symlinks for `@/components` under the local `node_modules` so that imports work out of the box on both Windows and macOS filesystems.

### 2. Start the Expo Showcase App

Navigate to the `gamalearn-ui/apps/expo-app` directory or run from the monorepo root:

#### **From Monorepo Root (`gamalearn-ui/`)**:
```bash
yarn run:expo
```

#### **From Expo App Directory (`gamalearn-ui/apps/expo-app/`)**:
```bash
yarn start --clear
```

---

## 🪟 Windows Execution & Compatibility Notes

To ensure Windows developers can run and compile the project without errors:

1. **Environment Variables**:
   We use `cross-env` inside the `package.json` scripts of `apps/expo-app`. This ensures that setting `EXPO_USE_METRO_WORKSPACE_ROOT=1` succeeds regardless of whether you are using Windows Command Prompt (CMD), PowerShell, or Git Bash.
   
2. **Metro Resolution**:
   The Metro configuration (`apps/expo-app/metro.config.js`) uses Node's native `path` module. It dynamically resolves path references using the correct path separator (`\` for Windows and `/` for macOS/Linux) to avoid bundle-time resolution failures.

3. **Clearing Cache**:
   If you rename directories or pull major package updates on Windows, old filesystems and bundler cache files can cause path mismatch errors. Run the dev server with the clear flag to resolve this:
   ```bash
   yarn start --clear
   ```

4. **PowerShell Script Policy Warning (Windows-specific)**:
   If you receive an error in PowerShell stating that execution of scripts is disabled on your system, open PowerShell as an Administrator and run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
   ```
