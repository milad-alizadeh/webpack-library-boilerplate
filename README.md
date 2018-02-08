[![devDependency Status](https://david-dm.org/boennemann/badges/dev-status.svg)](https://david-dm.org/boennemann/badges#info=devDependencies)

# Simple Webpack Library Boilerplate
This is a starter boilerplate for writing javascript libraries. It uses [Webpack](https://webpack.js.org/) as a bundler and [Jest](https://facebook.github.io/jest/) as a testing tool.

## Included Tools
* Bundler - [Webpack](https://webpack.js.org/)
* Testing - [Jest](https://facebook.github.io/jest/), [Codecov](https://codecov.io) and [Travis](https://travis-ci.org/)
* Compiler - [Babel](https://babeljs.io/)
* Linter - [ESLint](https://eslint.org/)
* Styling - [Sass](https://sass-lang.com/) & [PostCSS(Autoprefixer)](http://postcss.org/)

## Structure
* `./src/js` - Javasscript source folder
* `./src/js/__test__` - Javasscript test folder
* `./src/scss` - CSS assosiated with the library (SCSS)
* `./example` - Example folder where you can test your library
* `./dist` - Compiled JS, CSS

## Getting Started
In order to use this boilerplate you need to have [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

### Installing packages
#### yarn

`yarn install`

#### npm

`npm install`

### Commands
* `yarn run dev`

	Sets up a webpack dev server with [hot module replacemnet](https://webpack.js.org/concepts/hot-module-replacement/). This is the `index.html` in `./example/index.html` and can be accessed at `http://localhost:8080`
* `yarn run test`

	Runs jest to test all the files located in `./src/js/__test_/` folder.
* `yarn run test:watch`

	Runs jest watch and continously track the changes on test files
* `yarn run build`

	Compiles all the source files and creates a minified version in `./dist`  folder
* `yarn run production`

	Runs `yarn run build` and `yarn run test`

* `yarn run report-coverage`

	Runs codecov. for more information on code coverage please visit [codecov.io](https://codecov.io)

### Note
Please make sure to change the project name in `package.json` file. This also changes the name of the compiled js and css file.
