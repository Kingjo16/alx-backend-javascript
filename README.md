# 0x00. ES6 Basics

## Description
This project focuses on the fundamental concepts and features introduced in ECMAScript 6 (ES6). The goal is to provide a comprehensive understanding of ES6 and its new features, including block-scoped variables, arrow functions, default parameters, rest and spread operators, template literals, and more.

## Learning Objectives
By the end of this project, you should be able to explain and use the following concepts:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup
1. Install NodeJS 12.11.x:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
    Verify the installation:
    ```bash
    nodejs -v
    v12.11.1
    npm -v
    6.11.3
    ```

2. Install Jest, Babel, and ESLint:
    In your project directory, use the supplied `package.json` file and run:
    ```bash
    npm install
    ```

## Configuration Files
Add the following configuration files to your project directory:

### `package.json`
```json
{
  "name": "0x00-ES6_basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "dev": "node"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.1.0",
    "eslint-plugin-import": "^2.20.1",
    "jest": "^25.1.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}

