/**
 * All major and active ISO-4217 currencies.
 *
 * Sourced from https://datahub.io/core/currency-codes (on 2022-12-10)
 * Auto-generated using `$PROJECT_ROOT/tools/GenerateCurrencyData.ts`
 * with `$PROJECT_ROOT/resources/iso_currency_data.json` as input.
 *
 * [Generated on 2022-12-12T16:24:11.209Z]
 */
import { CurrencyCode, Currency } from './';
/**
 * Enumeration of valid ISO-4217-3 currency codes.
 * @internal
 */
export type ISOCurrencyCode = 'AFN' | 'EUR' | 'ALL' | 'DZD' | 'USD' | 'AOA' | 'XCD' | 'ARS' | 'AMD' | 'AWG' | 'AUD' | 'AZN' | 'BSD' | 'BHD' | 'BDT' | 'BBD' | 'BYN' | 'BZD' | 'XOF' | 'BMD' | 'INR' | 'BTN' | 'BOB' | 'BOV' | 'BAM' | 'BWP' | 'NOK' | 'BRL' | 'BND' | 'BGN' | 'BIF' | 'CVE' | 'KHR' | 'XAF' | 'CAD' | 'KYD' | 'CLP' | 'CLF' | 'CNY' | 'COP' | 'COU' | 'KMF' | 'CDF' | 'NZD' | 'CRC' | 'HRK' | 'CUP' | 'CUC' | 'ANG' | 'CZK' | 'DKK' | 'DJF' | 'DOP' | 'EGP' | 'SVC' | 'ERN' | 'SZL' | 'ETB' | 'FKP' | 'FJD' | 'XPF' | 'GMD' | 'GEL' | 'GHS' | 'GIP' | 'GTQ' | 'GBP' | 'GNF' | 'GYD' | 'HTG' | 'HNL' | 'HKD' | 'HUF' | 'ISK' | 'IDR' | 'XDR' | 'IRR' | 'IQD' | 'ILS' | 'JMD' | 'JPY' | 'JOD' | 'KZT' | 'KES' | 'KPW' | 'KRW' | 'KWD' | 'KGS' | 'LAK' | 'LBP' | 'LSL' | 'ZAR' | 'LRD' | 'LYD' | 'CHF' | 'MOP' | 'MKD' | 'MGA' | 'MWK' | 'MYR' | 'MVR' | 'MRU' | 'MUR' | 'XUA' | 'MXN' | 'MXV' | 'MDL' | 'MNT' | 'MAD' | 'MZN' | 'MMK' | 'NAD' | 'NPR' | 'NIO' | 'NGN' | 'OMR' | 'PKR' | 'PAB' | 'PGK' | 'PYG' | 'PEN' | 'PHP' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'RWF' | 'SHP' | 'WST' | 'STN' | 'SAR' | 'RSD' | 'SCR' | 'SLL' | 'SGD' | 'XSU' | 'SBD' | 'SOS' | 'SSP' | 'LKR' | 'SDG' | 'SRD' | 'SEK' | 'CHE' | 'CHW' | 'SYP' | 'TWD' | 'TJS' | 'TZS' | 'THB' | 'TOP' | 'TTD' | 'TND' | 'TRY' | 'TMT' | 'UGX' | 'UAH' | 'AED' | 'USN' | 'UYU' | 'UYI' | 'UYW' | 'UZS' | 'VUV' | 'VES' | 'VND' | 'YER' | 'ZMW' | 'ZWL' | 'XBA' | 'XBB' | 'XBC' | 'XBD' | 'XTS' | 'XXX' | 'XAU' | 'XPD' | 'XPT' | ('XAG' & CurrencyCode);
/**
 * Mapping of currency code->data for ISO Currencies.
 * @internal
 */
export declare const ISOCurrencies: Record<ISOCurrencyCode, Currency<ISOCurrencyCode>>;
/**
 * All valid ISO currency codes.
 * @internal
 */
export declare const ISOValidCurrencyCodes: string[];
//# sourceMappingURL=ISOCurrencies.d.ts.map