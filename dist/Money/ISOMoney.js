"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Currency_1 = require("../Currency");
const _1 = require("./");
const Utils_1 = require("../Utils");
class ISOMoney extends _1.AbstractMoney {
    /**
     * Create a new Money object.
     *
     * @param {ISOCurrencyCode} currency Currency code, e.g. `"USD"`, `"EUR"`,
     * `"GBP"`
     * @param {number} amount Integer value in the currency's smallest unit (e.g.
     * cents for USD)
     * @throws
     *  * `TypeError` on non-integer `amount` values
     *  * `RangeError` on unsupported `currency`
     * @example
     * ```typescript
     * const fiveDollars = new Money('USD', 500)
     * fiveDollars.getCurrency()     // => 'USD'
     * fiveDollars.getAmount()       // => 500
     * fiveDollars.toLocaleString()  // => '$5.00'
     * ```
     */
    constructor(currency, amount) {
        if (false === Number.isInteger(amount) && (0, Utils_1.isFloat)(amount)) {
            throw new TypeError(`\`amount\` '${amount} cannot be a float (hint: use ` +
                `\`Money.fromFloat()\` instead)`);
        }
        if ('string' === typeof amount) {
            throw new TypeError(`\`amount\` '${amount}' cannot be a string (hint: use ` +
                `\`Money.fromString()\` instead)`);
        }
        (0, Utils_1.assertSupportedISOCurrency)(currency);
        super(currency, amount);
    }
    /**
     * Create a new Money object from a floating-point value. The value will be
     * automatically rounded to the currency's smallest unit. The value will only
     * be precise to the currency's smallest unit (e.g. `USD$18.98123` will be
     * rounded to `USD$18.98`)
     *
     * @param {ISOCurrencyCode} currency Currency code, e.g. `"USD"`, `"EUR"`,
     * `"GBP"`
     * @param {number} amount Floating-point value (e.g. 99.99)
     * @throws
     *  * `TypeError` on non-float `amount` values.
     *  * `RangeError` on unsupported `currency`.
     * @example
     * ```typescript
     * const fiveDollarsAndSeventyCents = Money.fromFloat('USD', 5.70)
     * fiveDollarsAndSeventyCents.getCurrency()      // => 'USD'
     * fiveDollarsAndSeventyCents.getAmount()        // => 570
     * fiveDollarsAndSeventyCents.toLocaleString()   // => '$5.70'
     * ```
     * @category Static Constructor
     */
    static fromFloat(currency, amount) {
        if (true === Number.isInteger(amount)) {
            throw new TypeError(`\`amount\` '${amount}' cannot be an integer (hint: construct ` +
                `Money directly using \`new Money()\` instead)`);
        }
        if (false === (0, Utils_1.isFloat)(amount)) {
            throw new TypeError(`\`amount\` '${amount}' is not a valid float`);
        }
        const exponent = ISOMoney.getCurrencyUnit(currency);
        const roundedAmount = Math.round(amount * Math.pow(10, exponent));
        return new ISOMoney(currency, roundedAmount);
    }
    /**
     * Create a new Money object from a string. Supports both integer and
     * floating-point string values. If the amount is a floating-point, it
     * will be automatically rounded to the currency's smallest unit. The value
     * will only be precise to the currency's smallest unit (e.g. `USD$18.98123`
     * will be rounded to `USD$18.98`)
     *
     * @param {ISOCurrencyCode} currency Currency code, e.g. `"USD"`, `"EUR"`,
     * `"GBP"`.
     * @param {number} amount String amount value (can either be integer or a
     * float)
     * @throws
     *  * `TypeError` on incorrect `amount` values.
     *  * `RangeError` on unsupported `currency`.
     * @example
     * ```typescript
     * // Float
     * const fiveDollarsAndSeventyCents = Money.fromString('USD', '5.70')
     * fiveDollarsAndSeventyCents.getCurrency()      // => 'USD'
     * fiveDollarsAndSeventyCents.getAmount()        // => 570
     * fiveDollarsAndSeventyCents.toLocaleString()   // => '$5.70'
     * // Int
     * const eightyEur = Money.fromString('EUR', '8000')
     * eightyEur.getCurrency()                       // => 'EUR'
     * eightyEur.getAmount()                         // => 8000
     * eightyEur.toLocaleString()                    // => '€80.00'
     * ```
     * @category Static Constructor
     */
    static fromString(currency, amount) {
        if (false === (typeof amount === 'string')) {
            throw new TypeError(`\`amount\` '${amount}' is not a valid string`);
        }
        // @NOTE: `parseFloat()` is functionally similar to `parseInt()` - it works
        // for floating-point values (i.e. with decimals) and doesn't allow a radix
        // param (converts to base10 only). We're expecting floats here so that's
        // safer, and we only care about base10.
        const numberedAmount = parseFloat(amount);
        if ((0, Utils_1.isFloat)(numberedAmount)) {
            const exponent = ISOMoney.getCurrencyUnit(currency);
            const roundedAmount = Math.round(numberedAmount * Math.pow(10, exponent));
            return new ISOMoney(currency, roundedAmount);
        }
        return new ISOMoney(currency, numberedAmount);
    }
    /**
     * @category Getter
     * @returns The amount value.
     * @example
     * ```typescript
     * const oneDollar = new Money('USD', 10)
     * oneDollar.getAmount()   // => 10
     * ```
     */
    getAmount() {
        return super.getAmount();
    }
    /**
     * @category Getter
     * @returns The currency code.
     * @example
     * ```typescript
     * const oneDollar = new Money('USD', 10)
     * oneDollar.getCurrency() // => 'USD'
     * ```
     */
    getCurrency() {
        return super.getCurrency();
    }
    /**
     * @category Arithmetic
     * @returns A new Money holding the sum of this Money and input(s).
     * @throws
     *  * `TypeError` if input(s) is not a Money.
     *  * `RangeError` if currencies are not identical.
     * @example
     * ```typescript
     * const fiveUsd = new Money('USD', 500)
     * const tenUsd = new Money('USD', 1000)
     * const sum0 = fiveUsd.add(tenUsd)           // $5 + $10
     * sum0.getAmount()                           // => 1500
     * sum0.toLocaleString()                      // => '$15.00'
     * const fiftyUsd = new Money('USD', 5000)
     * const sum1 = fiveUsd.add(tenUsd, fiftyUsd) // $5 + $10 + $50
     * sum1.getAmount()                           // => 6500
     * sum1.toLocaleString()                      // => '$65.00'
     * ```
     */
    add(...addends) {
        (0, Utils_1.assertValidMonies)(this, ...addends);
        const sum = addends.reduce((acc, curr) => acc + curr.getAmount(), this.getAmount());
        return new ISOMoney(this.getCurrency(), sum);
    }
    /**
     * @category Arithmetic
     * @returns A new Money holding the difference between this Money and
     * input(s).
     * @throws
     *  * `TypeError` if input(s) is not a Money.
     *  * `RangeError` if currencies are not identical.
     * @example
     * ```typescript
     * const tenEur = new Money('EUR', 1000)
     * const fiveEur = new Money('EUR', 500)
     * const diff0 = tenEur.subtract(fiveEur)           // €10 - €5
     * diff0.getAmount()                                // => 500
     * diff0.toLocaleString()                           // => '€5.00'
     * const fiftyEur = new Money('EUR', 5000)
     * const diff1 = tenEur.subtract(fiftyEur, fiveEur) // €10 - €50 - €5
     * diff1.getAmount()                                // => -4500
     * diff1.toLocaleString()                           // => '-€45.00'
     * ```
     */
    subtract(...subtrahends) {
        (0, Utils_1.assertValidMonies)(this, ...subtrahends);
        const difference = subtrahends.reduce((acc, curr) => acc - curr.getAmount(), this.getAmount());
        return new ISOMoney(this.getCurrency(), difference);
    }
    /**
     * @category Arithmetic
     * @returns A new Money holding the product of this Money and input.
     * @example
     * ```typescript
     * const fiveYen = new Money('JPY', 500)
     * const product = fiveYen.multiply(9)   // ¥500 * 9
     * product.getAmount()                   // => 4500
     * product.toLocaleString()              // => '¥4,500'
     * ```
     */
    multiply(multiplier) {
        // @TODO This should support a custom rounding method
        const product = Math.round(this.getAmount() * multiplier);
        return new ISOMoney(this.getCurrency(), product);
    }
    /**
     * @category Arithmetic
     * @returns A new Money holding the quotient of this Money and input.
     * @example
     * ```typescript
     * const twentyYuan = new Money('CNY', 2000)
     * const quotient = twentyYuan.divide(8)  // CN¥20 / 8
     * quotient.getAmount()                   // => 250
     * quotient.toLocaleString()              // => 'CN¥2.50'
     * ```
     */
    divide(divisor) {
        // @TODO This should support a custom rounding method
        const quotient = Math.round(this.getAmount() / divisor);
        return new ISOMoney(this.getCurrency(), quotient);
    }
    /**
     * @category Comparison
     * @returns True if input is identical to this Money, otherwise false.
     * @throws
     *  * `TypeError` if input is not a Money.
     * @example
     * ```typescript
     * const a = new Money('USD', 2000)
     * const b = new Money('USD', 1000)
     * a.equals(b)  // => false
     * const c = new Money('USD', 2000)
     * a.equals(c)  // => true
     * const d = new Money('EUR', 2000)
     * c.equals(d)  // => false
     * ```
     */
    equals(other) {
        (0, Utils_1.assertAllMoney)(other);
        return (other.getCurrency() === this.getCurrency() &&
            other.getAmount() === this.getAmount());
    }
    /**
     * @category Comparison
     * @returns True if input is greater than this Money, otherwise false.
     * @throws
     *  * `TypeError` if input is not a Money.
     * @example
     * ```typescript
     * const a = new Money('USD', 2000)
     * const b = new Money('USD', 1000)
     * a.greaterThan(b)  // => true
     * b.greaterThan(a)  // => false
     * a.greaterThan(a)  // => false
     * ```
     */
    greaterThan(other) {
        (0, Utils_1.assertValidMonies)(this, other);
        return this.getAmount() > other.getAmount();
    }
    /**
     * @category Comparison
     * @returns True if input is greater than or equal to this Money, otherwise
     * false.
     * @throws
     *  * `TypeError` if input is not a Money.
     * @example
     * ```typescript
     * const a = new Money('USD', 1900)
     * const b = new Money('USD', 2000)
     * const c = new Money('USD', 2100)
     * a.greaterThanOrEqual(b)  // => false
     * b.greaterThanOrEqual(a)  // => true
     * a.greaterThanOrEqual(a)  // => true
     * c.greaterThanOrEqual(b)  // => true
     * ```
     */
    greaterThanOrEqual(other) {
        (0, Utils_1.assertValidMonies)(this, other);
        return this.getAmount() >= other.getAmount();
    }
    /**
     * @category Comparison
     * @returns True if input is less than this Money, otherwise false.
     * @throws
     *  * `TypeError` if input is not a Money.
     * @example
     * ```typescript
     * const a = new Money('USD', 1000)
     * const b = new Money('USD', 2000)
     * a.lessThan(b)  // => true
     * b.lessThan(a)  // => false
     * a.lessThan(a)  // => false
     * ```
     */
    lessThan(other) {
        (0, Utils_1.assertValidMonies)(this, other);
        return this.getAmount() < other.getAmount();
    }
    /**
     * @category Comparison
     * @returns True if input is less than or equal to this Money, otherwise
     * false.
     * @throws
     *  * `TypeError` if input is not a Money.
     * @example
     * ```typescript
     * const a = new Money('USD', 1900)
     * const b = new Money('USD', 2000)
     * const c = new Money('USD', 2100)
     * a.lessThanOrEqual(b)  // => true
     * b.lessThanOrEqual(a)  // => false
     * a.lessThanOrEqual(a)  // => true
     * c.lessThanOrEqual(b)  // => false
     * ```
     */
    lessThanOrEqual(other) {
        (0, Utils_1.assertValidMonies)(this, other);
        return this.getAmount() <= other.getAmount();
    }
    /**
     * Formats this Money object to locale-aware string with its currency symbol,
     * using [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).
     *
     * @category Formatting
     * @param {string} [locale] Optional. Defaults to `en-US`.
     * @returns {string} The string-formatted Money with its currency symbol
     *   (e.g. `"$49.99"`, `"9,99 €"`).
     * @example
     * ```typescript
     * const tenDollars = new Money('USD', 1000)
     * // Using default locale (`en-US`):
     * tenDollars.toLocaleString()         // => $10.00
     * // Using different locale:
     * tenDollars.toLocaleString('fr-CA')  // => 10,00 $ US
     * ```
     */
    toLocaleString(locale) {
        const exponent = ISOMoney.getCurrencyUnit(this.getCurrency());
        const amount = this.getAmount() / Math.pow(10, exponent);
        const formatter = Intl.NumberFormat(locale !== null && locale !== void 0 ? locale : 'en-US', {
            style: 'currency',
            currency: this.getCurrency(),
        });
        return formatter.format(amount);
    }
    /**
     * Convert Money to JSON.
     *
     * @category Formatting
     * @returns {{ amount: number; currency: T }} JSON object.
     * @example
     * ```typescript
     * const tenDollars = new Money('USD', 1000)
     * tenDollars.toJSON()  // => { currency: 'USD', amount: 1000 }
     * ```
     */
    toJSON() {
        return { currency: this.getCurrency(), amount: this.getAmount() };
    }
    /**
     * @param {ISOCurrencyCode} [currency] Currency code.
     * @returns Currency unit for `currency`.
     * @category Internal
     * @internal
     */
    static getCurrencyUnit(currency) {
        var _a;
        return (_a = Currency_1.ISOCurrencies[currency]) === null || _a === void 0 ? void 0 : _a.units;
    }
}
exports.default = ISOMoney;
