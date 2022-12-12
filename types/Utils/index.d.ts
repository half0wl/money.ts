import { AbstractMoney as Money } from '../Money';
import { CurrencyCode, ISOCurrencyCode } from '../Currency';
/**
 * @returns True if all elements of T is equivalent, otherwise false.
 */
export declare const all: <T>(...n: T[]) => boolean;
/**
 * @returns true if all elements is an instance of Money, otherwise false.
 */
export declare const allMoney: (...n: any[]) => boolean;
/**
 * @returns True if `n` is a floating-point value, otherwise false.
 */
export declare const isFloat: (n: any) => boolean;
/**
 * @throws `RangeError` if all currencies are not identical.
 */
export declare const assertIdenticalCurrencies: (...n: CurrencyCode[]) => void;
/**
 * @throws `TypeError` if all inputs are not an instance of Money.
 */
export declare const assertAllMoney: (...n: any[]) => void;
/**
 * @throws `RangeError` if `n` is not an ISO currency.
 */
export declare const assertSupportedISOCurrency: (n: ISOCurrencyCode) => void;
/**
 * @throws
 *  * `TypeError` if all inputs are not an instance of Money.
 *  * `RangeError` if all currencies are not identical.
 */
export declare const assertValidMonies: (...n: Money[]) => void;
//# sourceMappingURL=index.d.ts.map