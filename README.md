#is-even-integer

Test whether an integer is even - is well tested. 

##Overview

The module can be used when you need a function that tests to see if a value is an even integer.

##Installing 

```javascript
npm i is-integer-even --save-dev
```

##Usage

Simply require the `is-even-integer` module. The export function can be used in any module you desire:

```javascript
const even = require('is-even-integer');

isEven(10); // true

```

##TODO

* add more tests

##Tests

'npm test'

###true

```javascript
isEven(120000); // true
isEven(5e10);   // true
isEven(-2);     // true 
isEven(-450);   // true
isEven(-7e3);   // true
```

###false
```javascript
isEven(Number.POSITIVE_INFINITY); // false
isEven(Number.NEGATIVE_INFINITY); // false
isEven(NaN);                      // false
isEven('string');                 // false
isEven(undefined);                // false
isEven(true);                     // false
```

##Contributing

Feel free to file an issue or bug.