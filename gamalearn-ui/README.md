# GamaLearn UI Monorepo

This directory contains the single-source-of-truth workspace for our custom component library and showcase application.

## 📁 Directory Structure

- **`apps/expo-app`**: Expo showcase app featuring the interactive pages (Sign In, Sign Up, God Card).
- **`packages/components`**: Custom UI components built on top of gluestack-ui.
- **`packages/screens`**: Reusable complex screens (e.g. Authentication screens, God Card interactive modes).
- **`packages/hooks`**: Shared utility hooks.
- **`packages/shared`**: Reusable design tokens, constants, and assets.

## 🚀 Running the App

Run the following commands from this directory:

### Install Dependencies
```bash
yarn install
```

### Start Expo App (iOS, Android, Web)
```bash
yarn run:expo
```

For more detailed information, including Windows compatibility instructions and theme setup, please refer to the main repository [README.md](../README.md).
