# 💵 money.ts

This library aims to make working with monetary values in TypeScript/JavaScript safer and easier.

Monetary values always have a currency. They are distinct by currency ($1 is
not equivalent to €1), and each currency has different properties that affect
how they're displayed, rounded, and parsed. It can be tricky to get all of
this right, and if you're handling money at all, it can be expensive to get
something wrong!

See: http://martinfowler.com/eaaCatalog/money.html

## Installation

```sh
# Using npm:
$ npm i @half0wl/money

# Using yarn:
$ yarn add @half0wl/money
```

### Import
```typescript
// TypeScript
import { Money } from "@half0wl/money"

// JavaScript/CommonJS
'use strict';
const Money = require("@half0wl/money").Money
```

## Features

* Arithmetic (add, subtract, etc.) and comparison (equals, greater/less than, etc.)
* Immutability - every operation returns a new `Money` object, and properties
are not modifiable
* Locale-aware string formatting
* Lightweight; zero external dependencies
* JavaScript is fully support. Enabling [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (`'use strict';`) is highly recommended, but this will work fine without it

## Concept

A Money object has a `currency` and `amount`, where:

* Currency is an [ISO-4217](https://www.xe.com/iso4217.php) alpha code, e.g. `USD`, `JPY`, `EUR`, `SGD`
* Amount is represented in the currency's lowest unit, e.g. US$5.00 = 500 cents = `{ currency: USD, amount: 500 }`

## Usage

```typescript
import { Money } from "@half0wl/money"

/**
 * Basic operations
 */
const listing = new Money('USD', 19999)                // Default constructor from int
listing.getCurrency()                                  // => USD
listing.getAmount()                                    // => 19999
listing.toLocaleString()                               // => '$199.99'

const shipping = Money.fromFloat('USD', 15.00)         // From float
shipping.getAmount()                                   // => 1500
shipping.toLocaleString()                              // => '$15.00'

const xmasDiscount = Money.fromString('USD', '2000')   // From int-string
xmasDiscount.getAmount()                               // => 2000
xmasDiscount.toLocaleString()                          // => '$20.00'

const promoDiscount = Money.fromString('USD', '10.00') // From float-string
promoDiscount.getAmount()                              // => 1000
promoDiscount.toLocaleString()                         // => '$10.00'

const subtotal = listing
  .add(shipping)
  .subtract(xmasDiscount, promoDiscount)
subtotal.getCurrency()                                 // => 'USD'
subtotal.getAmount()                                   // => 18499
subtotal.toLocaleString()                              // => '$184.99'

/**
 * Other arithmetic operations
 */
subtotal.multiply(2.4).toLocaleString()                // => '$443.98'
subtotal.divide(8).toLocaleString()                    // => $23.12

/**
 * Comparisons
 */
promoDiscount.equals(promoDiscount)                    // => false
promoDiscount.greaterThan(promoDiscount)               // => true
shipping.greaterThanOrEqual(listing)                   // => false
shipping.lessThan(listing)                             // => true

/**
 * Formatting
 */
const tenDollars = new Money('USD', 1000)
// Using default locale (`en-US`):
tenDollars.toLocaleString()                            // => $10.00
// Using different locale:
tenDollars.toLocaleString('fr-CA')                     // => 10,00 $ US
// JSON
tenDollars.toJSON()                                    // => {
                                                       //      currency: 'USD',
                                                       //      amount: 1000
                                                       //    }

/**
 * Immutability
 */
// All operations return a new `Money` object:
const sixEur = new Money('EUR', 600)
const oneEur = new Money('EUR', 100)
sixEur.add(oneEur)       // This returns a new Money object!
sixEur.toLocaleString()  // => '€6.00'
                         // The amount value is *not* updated in-place.

// To get the result of `sixEur.add(oneEur)`:
const result = sixEur.add(oneEur)
result.toLocaleString()  // => '€7.00'

// Properties are *always* read-only:
// TypeScript
const twoEur = new Money('EUR', 200)
twoEur['amount'] = 0 // => error TS2540: Cannot assign to 'amount'
                     //    because it is a read-only property.

// JavaScript (in strict mode)
'use strict';
const threeEur = new Money('EUR', 300)
threeEur['amount'] = 0 // => TypeError: Cannot assign to read only
                       //    property 'amount' of object '#<Money>'
```

## Development

Clone the repo and install dependencies:

```sh
$ git clone https://github.com/half0wl/money.ts.git
$ yarn install
```

Tests are located under [`/tests`](/tests). To run them:

```sh
$ yarn test
```

Code documentation is written in and generated with [TypeDoc](https://typedoc.org).
To generate docs:

```sh
$ yarn gen-docs
```

## Acknowledgements

* [moneyphp/money](https://github.com/moneyphp/money) for inspiration
* [Datahub](https://datahub.io/core/currency-codes) for currency data

## License

[MIT](LICENSE)
