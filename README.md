# Teo Language Support

This extension provides enhanced Teo language and code intellisense support for
Visual Studio Code.

## Features

* Syntax highlighting
* Linting
* Code completion
* Jump to definition
* Source code format

## Release Notes

### 0.2.14 (Apr 1st, 2024)

* Add `admin` config block

### 0.2.13 (Mar 23rd, 2024)

* Add optional argument `otherwise` to `$when`

### 0.2.12 (Mar 22nd, 2024)

* Add value as type expression
* Add permission pipeline items
* Remove deprecated test config block
* Fix argument list resolving bug

### 0.2.11 (Mar 17th, 2024)

* Add `$message` pipeline item
* Writeonly fields considered as scalar fields
* Add `ids` to identity checker args
* Fix optional type resolving into nested bug

### 0.2.10 (Mar 15th, 2024)

* Add interface decorators
* Update sign in shape declaration
* Fixed field of declared shape is not optional bug

### 0.2.9 (Mar 15th, 2024)

* Handler template
* Handler template inclusion
* Declared synthesized shapes
* Fix jump to definition for namespace level route handlers
* Add pipeline item `$do` and `$not`

### 0.2.8 (Mar 9th, 2024)

* Fixed string filter case mode

### 0.2.7 (Mar 5th, 2024)

* Add input omissible to properties

### 0.2.6 (Mar 5th, 2024)

* Fix environment variable is invalid expression bug
* Fix subscription alters current namespace path bug
* Update math items declarations and fix type checking bug
* Fix assign pipeline item declaration bug

### 0.2.5 (Mar 5th, 2024)

* Fix environment variable is invalid expression bug
* Fix subscription alters current namespace path bug
* Improve schema cache stability

### 0.2.4 (Mar 3rd, 2024)

* Support TypeScript client custom HTTP providers

### 0.2.3 (Feb 26th, 2024)

* Support dynamic client host

### 0.2.2 (Feb 18th, 2024)

* Correct pipeline trigger arguments

### 0.2.1 (Feb 15th, 2024)

* Fix data set group error message

### 0.2.0 (Feb 2nd, 2024)

* Support Python
* Fix relation filter is required bug

### 0.1.0 (Jan 17th, 2024)

* Support Node.js

### 0.0.24 (Dec 26th, 2023)

* Add relation update and delete rules
* Fix crashing when auto completing relation code

### 0.0.23 (Dec 22nd, 2023)

* Handlers in top level and namespace level
* Optional handler input types
* Add keyword `nonapi` to handler declarations
* Highlight `Any` as builtin type
* Update handler decorators
* Fix output type of pipeline item `$when`

### 0.0.22 (Dec 20th, 2023)

* Allow doc comment in dictionary literals
* Fix import keyword is not recognized bug
* Improve performance on auto completion
* Fixed data set syntax highlight bug

### 0.0.21 (Dec 17th, 2023)

* Syntax highlight for availability flags
* Update handler declaration syntax
* Syntax highlight for use `middlewares`
* Syntax highlight for enum values and arguments
* Fix syntax highlight bug for pipeline item declaration
* Syntax highlight for generic constraint

### 0.0.20 (Nov 30th, 2023)

* Support type syntax `(T | U)[]?`
* Added filter interfaces
* Added interface enum
* `null` doesn't pass `Optional` type anymore, ignore instead
* Support identifiers that start with underscore
* Added type coerce
* Dictionary literal is aligned with TypeScript object literal
* Jump to argument list declaration names
* Improve stability
* File format

### 0.0.19 (Nov 7th, 2023)

* Support enum member with arguments
* Support force unwrap operator
* Auto completion
* Added database types
* Support handler decorators
* Support availability flags
* Support data sets
* Support inferred model inputs

### 0.0.18 (Oct 16th, 2023)

* Improved diagnostic messages for pipeline items
* Jump to definition
* Diagnostic messages for struct functions

### 0.0.17 (Oct 12th, 2023)

* Added code diagnostics for relations
* Added code diagnostics for some pipeline items

### 0.0.16 (Oct 9th, 2023)

* Added highlights for newly added syntaxes
* Auto complete decorators
* Jump to imported files

### 0.0.15 (Oct 3rd, 2023)

* Added code diagnostics for importing an unexisting file
* Added code diagnostics for duplicated model definitions

### 0.0.14 (Sep 24th, 2023)

* Highlight for comments in tuple and array literals

### 0.0.13 (Sep 23rd, 2023)

* Highlight for namespaced types

### 0.0.12 (Sep 22nd, 2023)

* Added namespace syntax highlighting

### 0.0.11 (Aug 6th, 2023)

* Updated action declaration

### 0.0.10 (Aug 5th, 2023)

* Added highlighting for interfaces

### 0.0.9 (Jul 31st, 2023)

* Added highlighting for dataset

### 0.0.8 (Jul 29th, 2023)

* Improved highlighting for comments
* Fixed wrong range highlighting in strings

### 0.0.7 (Feb 15th, 2023)

* Support highlighting regular expression

### 0.0.6 (Feb 6th, 2023)

* Support `let` and `import`

### 0.0.5 (Feb 3rd, 2023)

* Support range literal
* Fixed pipeline highlighting bug
* Support `server` keyword for Teo 0.0.44

### 0.0.4 (Feb 1st, 2023)

* Update syntax highlighting for `entity` keyword

### 0.0.2 (Jan 8th, 2023)

* Add syntax highlighting for pipelines

### 0.0.1 (Nov 5th, 2022)

* Basic syntax highlighting
