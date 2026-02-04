# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains all extension code.
- `src/commands/` holds command registrations and handlers.
- `src/util/` contains shared utilities (e.g., `date/`, `workspace/`).
- `src/test/` contains extension tests; test files end in `.test.ts`.
- `images/` includes assets used in the README and marketplace listing.
- Build output is generated into `dist/` (Webpack) and `out/` (TypeScript).

## Build, Test, and Development Commands

Run commands from the repo root:

- `npm install`: install dependencies.
- `npm run watch`: build in development mode and run the TS compiler in watch mode.
- `npm run compile`: production Webpack build plus a TypeScript compile.
- `npm run test-compile`: type-check the project with `tsc`.
- `npm run test`: run the VS Code extension test runner (`./out/test/runTest.js`).
- `npm run format`: format `src/**/*` with Prettier.
- `vsce package`: produce a `.vsix` package for local installation.

## Coding Style & Naming Conventions

- Indentation is 2 spaces (see `src/extension.ts`).
- Use TypeScript strict mode from `tsconfig.json`.
- Naming follows standard TS conventions: `camelCase` for vars/functions, `PascalCase` for classes, `SCREAMING_SNAKE_CASE` for constants (see `Constants`).
- Formatting is enforced with Prettier; lint rules live in `tslint.json`.

## Testing Guidelines

- Tests are Mocha-based and live in `src/test`.
- Name tests as `*.test.ts` and register them in `src/test/index.ts`.
- Run tests via `npm test` or VS Code Debug: “Extension Tests”.

## Commit & Pull Request Guidelines

- Commit messages in history are short, sentence case, and descriptive (e.g., “update azure-pipelines.yml”).
- Version bumps are sometimes a bare version number (e.g., `0.2.1`).
- PRs should include a brief summary, testing notes, and screenshots when behavior/UI changes.

## Configuration Tips

- Extension settings are defined in `package.json` under `contributes.configuration`:
  `lightSwitch.themeDark`, `lightSwitch.themeLight`, and `lightSwitch.switchTime*`.
