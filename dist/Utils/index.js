"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidMonies = exports.assertSupportedISOCurrency = exports.assertAllMoney = exports.assertIdenticalCurrencies = exports.isFloat = exports.allMoney = exports.all = void 0;
const Money_1 = require("../Money");
const Currency_1 = require("../Currency");
/**
 * @returns True if all elements of T is equivalent, otherwise false.
 */
const all = (...n) => n.every((_) => _ === n[0]);
exports.all = all;
/**
 * @returns true if all elements is an instance of Money, otherwise false.
 */
const allMoney = (...n) => n.every((_) => _ instanceof Money_1.AbstractMoney);
exports.allMoney = allMoney;
/**
 * @returns True if `n` is a floating-point value, otherwise false.
 */
const isFloat = (n) => Number(n) === n && n % 1 !== 0;
exports.isFloat = isFloat;
/**
 * @throws `RangeError` if all currencies are not identical.
 */
const assertIdenticalCurrencies = (...n) => {
    if ((0, exports.all)(...n)) {
        return;
    }
    throw new RangeError(`Currencies must be identical`);
};
exports.assertIdenticalCurrencies = assertIdenticalCurrencies;
/**
 * @throws `TypeError` if all inputs are not an instance of Money.
 */
const assertAllMoney = (...n) => {
    if ((0, exports.allMoney)(...n)) {
        return;
    }
    throw new TypeError(`Input must be an instance of Money`);
};
exports.assertAllMoney = assertAllMoney;
/**
 * @throws `RangeError` if `n` is not an ISO currency.
 */
const assertSupportedISOCurrency = (n) => {
    if (false === Currency_1.ISOValidCurrencyCodes.includes(n)) {
        throw new RangeError(`Currency \`${n}\` is not a valid ISO-4217 currency code`);
    }
};
exports.assertSupportedISOCurrency = assertSupportedISOCurrency;
/**
 * @throws
 *  * `TypeError` if all inputs are not an instance of Money.
 *  * `RangeError` if all currencies are not identical.
 */
const assertValidMonies = (...n) => {
    (0, exports.assertAllMoney)(...n);
    (0, exports.assertIdenticalCurrencies)(...[...n].map((m) => m.getCurrency()));
};
exports.assertValidMonies = assertValidMonies;
