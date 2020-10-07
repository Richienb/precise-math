# precise-math [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/precise-math/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/precise-math)

Perform precise math operations without floating point errors.

[![NPM Badge](https://nodei.co/npm/precise-math.png)](https://npmjs.com/package/precise-math)

## Install

```sh
npm install precise-math
```

## Usage

```js
const { add } = require("precise-math")

console.log(0.2 + 0.1 + 0.05)
//=> 0.35000000000000003

console.log(add(0.2, 0.1, 0.05))
//=> 0.35
```

## API

### add(...numbers)

### subtract(...numbers)

### multiply(...numbers)

### divide(...numbers)

### modulo(...numbers)

#### numbers

Type: `numbers`

The numbers to perform the math operation on.
