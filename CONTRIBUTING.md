# Contributing to VS Code Light Switch

Thank you for being interested in contributing to our project! Contributions are more than welcome 🕺 Below are some useful information and guidelines for you to know before you submit a pull request.

## Table of Contents

- [Contributing to VS Code Light Switch](#contributing-to-vs-code-light-switch)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Code Structure](#code-structure)
  - [Ways to Contribute](#ways-to-contribute)
    - [Bug Reports](#bug-reports)
    - [Code Refactoring](#code-refactoring)
    - [Enhancements](#enhancements)
  - [Testing Changes](#testing-changes)
    - [Add a Test Script](#add-a-test-script)

## Getting Started

- Install dependencies ([day.js](https://day.js.org/en/)):

```sh
npm install moment --save
```

## Code Structure

```txt
vscode-light_switch
└───images
└───src
    └───commands:     Every command goes here - includes the generic command binder
    └───test:         All test scripts are ran here.
    └───util:         General utilities
        └───date:     Date conversion with day.js
        └───workspace Basic functions for getting important workspace information

```

## Ways to Contribute

### Bug Reports

If you've found a bug, great! **Before you add an issue**, check if it is [already reported](https://github.com/timrodz/vscode-light_switch/issues).

### Code Refactoring

Pull requests beautifying code/correcting typos are also welcome.

### Enhancements

If you have any enhancement suggestions (be it minor improvements or completely new features), feel free to suggest them!

## Testing Changes

If you have added something new, create a test script for it.

Test scripts for this project are located in the test directory `src/test`. The test runner script `index.ts` executes all tests defined in files ending with `.test.ts` in the test directory. [More on VS Code Extension testing](https://code.visualstudio.com/api/working-with-extensions/testing-extension)

### Add a Test Script

1. Create `src/test/<exampleFeature>.test.ts`:

```ts
import * as assert from 'assert';
import { before } from 'mocha';
import * as vscode from 'vscode';

suite('suiteName', () => {
  before(() => {
    // TODO: Add code to execute before test
  });

  test('Test name', () => {
    // TODO: Add testing code
    // Example: assert.equal(1, 2-1);
  });
});
```

2. Head to the debugging area and choose `Extension Tests` to [run the tests](https://code.visualstudio.com/api/working-with-extensions/testing-extension/debug.mp4).
