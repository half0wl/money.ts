import { AbstractMoney as Money } from '../Money'
import {
  CurrencyCode,
  ISOCurrencyCode,
  ISOValidCurrencyCodes,
} from '../Currency'

/**
 * @returns True if all elements of T is equivalent, otherwise false.
 */
export const all = <T>(...n: T[]): boolean => n.every((_) => _ === n[0])

/**
 * @returns true if all elements is an instance of Money, otherwise false.
 */
export const allMoney = (...n: any[]): boolean =>
  n.every((_) => _ instanceof Money)

/**
 * @returns True if `n` is a floating-point value, otherwise false.
 */
export const isFloat = (n: any): boolean => Number(n) === n && n % 1 !== 0

/**
 * @throws `RangeError` if all currencies are not identical.
 */
export const assertIdenticalCurrencies = (...n: CurrencyCode[]): void => {
  if (all<CurrencyCode>(...n)) {
    return
  }
  throw new RangeError(`Currencies must be identical`)
}

/**
 * @throws `TypeError` if all inputs are not an instance of Money.
 */
export const assertAllMoney = (...n: any[]) => {
  if (allMoney(...n)) {
    return
  }
  throw new TypeError(`Input must be an instance of Money`)
}

/**
 * @throws `RangeError` if `n` is not an ISO currency.
 */
export const assertSupportedISOCurrency = (n: ISOCurrencyCode) => {
  if (false === ISOValidCurrencyCodes.includes(n)) {
    throw new RangeError(
      `Currency \`${n}\` is not a valid ISO-4217 currency code`,
    )
  }
}

/**
 * @throws
 *  * `TypeError` if all inputs are not an instance of Money.
 *  * `RangeError` if all currencies are not identical.
 */
export const assertValidMonies = (...n: Money[]): void => {
  assertAllMoney(...n)
  assertIdenticalCurrencies(...[...n].map((m) => m.getCurrency()))
}
