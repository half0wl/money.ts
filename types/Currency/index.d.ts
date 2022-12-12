import { ISOCurrencyCode, ISOCurrencies, ISOValidCurrencyCodes } from './ISOCurrencies';
/**
 * Represents a alphabetical Currency Code, e.g. `"USD", "JPY", ...`
 */
type CurrencyCode = string;
/**
 * Represents a Currency.
 * @typeParam T - Code for this currency, e.g. `"USD" | "JPY" | ...`
 */
type Currency<T extends CurrencyCode> = {
    code: T;
    name: string;
    units: number;
};
export { CurrencyCode, Currency, ISOCurrencyCode, ISOCurrencies, ISOValidCurrencyCodes, };
//# sourceMappingURL=index.d.ts.map