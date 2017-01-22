## Synopsis

This repository serves as a template to create custom Nightwatch Test Suites from scratch.
 
## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

To run the test suites, enter:
```
./node_modules/.bin/nightwatch
```

## Motivation

Having a simple and general starting point to set up a test automation stack.

## Installation

# 1. Clone the repo to a dedicated local directory.
This is the folder/file structure:
```
Repository
   |_ commands
   |    |_commands.js
   |_ pages
   |    |_ pageObjects.js
   |_ settings
   |    |_globalsModule.js
   |_ tests
   |	|_*Test Suites containing tests go here*
   |_ .gitignore
   |_ nightwatch.json
   |_ package.json
   |_ readme.md
```
# 2. run the following command to install all depencies:
```
npm install
```
# 3. Within the root folder of the repository tests can be executed by entering:
```
./node_modules/.bin/nightwatch
```
