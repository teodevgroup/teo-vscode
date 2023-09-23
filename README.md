# Teo Language Support

This extension provides enhanced Teo language and code intellisense support for
Visual Studio Code.

## Features

* Syntax highlighting
* Linting
* Code completion
* Formatting
* Jump to definition

## Release Notes

### 0.0.13 (Seg 23nd, 2023)

* Highlight for namespaced types

### 0.0.12 (Seg 22nd, 2023)

* Added namespace syntax highlighting.

### 0.0.11 (Aug 6th, 2023)

* Updated action declaration.

### 0.0.10 (Aug 5th, 2023)

* Added highlighting for interfaces.

### 0.0.9 (Jul 31st, 2023)

* Added highlighting for dataset.

### 0.0.8 (Jul 29th, 2023)

* Improved highlighting for comments.
* Fixed wrong range highlighting in strings.

### 0.0.7 (Feb 15th, 2023)

* Support highlighting regular expression.

### 0.0.6 (Feb 6th, 2023)

* Support `let` and `import`.

### 0.0.5 (Feb 3rd, 2023)

* Support range literal.
* Fixed pipeline highlighting bug.
* Support `server` keyword for Teo 0.0.44.

### 0.0.4 (Feb 1st, 2023)

* Update syntax highlighting for `entity` keyword.

### 0.0.2 (Jan 8th, 2023)

* Add syntax highlighting for pipelines.

### 0.0.1 (Nov 5th, 2022)

* Basic syntax highlighting.

## Bugs

Temporarily removed range from the syntax.

``` js
    // {
    //   "include": "#range"
    // },
```