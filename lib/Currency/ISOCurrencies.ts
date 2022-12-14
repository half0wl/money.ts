/**
 * All major and active ISO-4217 currencies.
 *
 * Sourced from https://datahub.io/core/currency-codes (on 2022-12-10)
 * Auto-generated using `$PROJECT_ROOT/tools/GenerateCurrencyData.ts`
 * with `$PROJECT_ROOT/resources/iso_currency_data.json` as input.
 *
 * [Generated on 2022-12-12T16:24:11.209Z]
 */

import { CurrencyCode, Currency } from './'

/**
 * Enumeration of valid ISO-4217-3 currency codes.
 * @internal
 */
export type ISOCurrencyCode =
  | 'AFN'
  | 'EUR'
  | 'ALL'
  | 'DZD'
  | 'USD'
  | 'AOA'
  | 'XCD'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'AZN'
  | 'BSD'
  | 'BHD'
  | 'BDT'
  | 'BBD'
  | 'BYN'
  | 'BZD'
  | 'XOF'
  | 'BMD'
  | 'INR'
  | 'BTN'
  | 'BOB'
  | 'BOV'
  | 'BAM'
  | 'BWP'
  | 'NOK'
  | 'BRL'
  | 'BND'
  | 'BGN'
  | 'BIF'
  | 'CVE'
  | 'KHR'
  | 'XAF'
  | 'CAD'
  | 'KYD'
  | 'CLP'
  | 'CLF'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'KMF'
  | 'CDF'
  | 'NZD'
  | 'CRC'
  | 'HRK'
  | 'CUP'
  | 'CUC'
  | 'ANG'
  | 'CZK'
  | 'DKK'
  | 'DJF'
  | 'DOP'
  | 'EGP'
  | 'SVC'
  | 'ERN'
  | 'SZL'
  | 'ETB'
  | 'FKP'
  | 'FJD'
  | 'XPF'
  | 'GMD'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GTQ'
  | 'GBP'
  | 'GNF'
  | 'GYD'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'IDR'
  | 'XDR'
  | 'IRR'
  | 'IQD'
  | 'ILS'
  | 'JMD'
  | 'JPY'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LBP'
  | 'LSL'
  | 'ZAR'
  | 'LRD'
  | 'LYD'
  | 'CHF'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'MRU'
  | 'MUR'
  | 'XUA'
  | 'MXN'
  | 'MXV'
  | 'MDL'
  | 'MNT'
  | 'MAD'
  | 'MZN'
  | 'MMK'
  | 'NAD'
  | 'NPR'
  | 'NIO'
  | 'NGN'
  | 'OMR'
  | 'PKR'
  | 'PAB'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'SHP'
  | 'WST'
  | 'STN'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'XSU'
  | 'SBD'
  | 'SOS'
  | 'SSP'
  | 'LKR'
  | 'SDG'
  | 'SRD'
  | 'SEK'
  | 'CHE'
  | 'CHW'
  | 'SYP'
  | 'TWD'
  | 'TJS'
  | 'TZS'
  | 'THB'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'USN'
  | 'UYU'
  | 'UYI'
  | 'UYW'
  | 'UZS'
  | 'VUV'
  | 'VES'
  | 'VND'
  | 'YER'
  | 'ZMW'
  | 'ZWL'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XTS'
  | 'XXX'
  | 'XAU'
  | 'XPD'
  | 'XPT'
  | ('XAG' & CurrencyCode)

/**
 * Mapping of currency code->data for ISO Currencies.
 * @internal
 */
export const ISOCurrencies: Record<
  ISOCurrencyCode,
  Currency<ISOCurrencyCode>
> = {
  AFN: { name: 'Afghani', code: 'AFN', units: 2 },
  EUR: { name: 'Euro', code: 'EUR', units: 2 },
  ALL: { name: 'Lek', code: 'ALL', units: 2 },
  DZD: { name: 'Algerian Dinar', code: 'DZD', units: 2 },
  USD: { name: 'US Dollar', code: 'USD', units: 2 },
  AOA: { name: 'Kwanza', code: 'AOA', units: 2 },
  XCD: { name: 'East Caribbean Dollar', code: 'XCD', units: 2 },
  ARS: { name: 'Argentine Peso', code: 'ARS', units: 2 },
  AMD: { name: 'Armenian Dram', code: 'AMD', units: 2 },
  AWG: { name: 'Aruban Florin', code: 'AWG', units: 2 },
  AUD: { name: 'Australian Dollar', code: 'AUD', units: 2 },
  AZN: { name: 'Azerbaijan Manat', code: 'AZN', units: 2 },
  BSD: { name: 'Bahamian Dollar', code: 'BSD', units: 2 },
  BHD: { name: 'Bahraini Dinar', code: 'BHD', units: 3 },
  BDT: { name: 'Taka', code: 'BDT', units: 2 },
  BBD: { name: 'Barbados Dollar', code: 'BBD', units: 2 },
  BYN: { name: 'Belarusian Ruble', code: 'BYN', units: 2 },
  BZD: { name: 'Belize Dollar', code: 'BZD', units: 2 },
  XOF: { name: 'CFA Franc BCEAO', code: 'XOF', units: 0 },
  BMD: { name: 'Bermudian Dollar', code: 'BMD', units: 2 },
  INR: { name: 'Indian Rupee', code: 'INR', units: 2 },
  BTN: { name: 'Ngultrum', code: 'BTN', units: 2 },
  BOB: { name: 'Boliviano', code: 'BOB', units: 2 },
  BOV: { name: 'Mvdol', code: 'BOV', units: 2 },
  BAM: { name: 'Convertible Mark', code: 'BAM', units: 2 },
  BWP: { name: 'Pula', code: 'BWP', units: 2 },
  NOK: { name: 'Norwegian Krone', code: 'NOK', units: 2 },
  BRL: { name: 'Brazilian Real', code: 'BRL', units: 2 },
  BND: { name: 'Brunei Dollar', code: 'BND', units: 2 },
  BGN: { name: 'Bulgarian Lev', code: 'BGN', units: 2 },
  BIF: { name: 'Burundi Franc', code: 'BIF', units: 0 },
  CVE: { name: 'Cabo Verde Escudo', code: 'CVE', units: 2 },
  KHR: { name: 'Riel', code: 'KHR', units: 2 },
  XAF: { name: 'CFA Franc BEAC', code: 'XAF', units: 0 },
  CAD: { name: 'Canadian Dollar', code: 'CAD', units: 2 },
  KYD: { name: 'Cayman Islands Dollar', code: 'KYD', units: 2 },
  CLP: { name: 'Chilean Peso', code: 'CLP', units: 0 },
  CLF: { name: 'Unidad de Fomento', code: 'CLF', units: 4 },
  CNY: { name: 'Yuan Renminbi', code: 'CNY', units: 2 },
  COP: { name: 'Colombian Peso', code: 'COP', units: 2 },
  COU: { name: 'Unidad de Valor Real', code: 'COU', units: 2 },
  KMF: { name: 'Comorian Franc', code: 'KMF', units: 0 },
  CDF: { name: 'Congolese Franc', code: 'CDF', units: 2 },
  NZD: { name: 'New Zealand Dollar', code: 'NZD', units: 2 },
  CRC: { name: 'Costa Rican Colon', code: 'CRC', units: 2 },
  HRK: { name: 'Kuna', code: 'HRK', units: 2 },
  CUP: { name: 'Cuban Peso', code: 'CUP', units: 2 },
  CUC: { name: 'Peso Convertible', code: 'CUC', units: 2 },
  ANG: { name: 'Netherlands Antillean Guilder', code: 'ANG', units: 2 },
  CZK: { name: 'Czech Koruna', code: 'CZK', units: 2 },
  DKK: { name: 'Danish Krone', code: 'DKK', units: 2 },
  DJF: { name: 'Djibouti Franc', code: 'DJF', units: 0 },
  DOP: { name: 'Dominican Peso', code: 'DOP', units: 2 },
  EGP: { name: 'Egyptian Pound', code: 'EGP', units: 2 },
  SVC: { name: 'El Salvador Colon', code: 'SVC', units: 2 },
  ERN: { name: 'Nakfa', code: 'ERN', units: 2 },
  SZL: { name: 'Lilangeni', code: 'SZL', units: 2 },
  ETB: { name: 'Ethiopian Birr', code: 'ETB', units: 2 },
  FKP: { name: 'Falkland Islands Pound', code: 'FKP', units: 2 },
  FJD: { name: 'Fiji Dollar', code: 'FJD', units: 2 },
  XPF: { name: 'CFP Franc', code: 'XPF', units: 0 },
  GMD: { name: 'Dalasi', code: 'GMD', units: 2 },
  GEL: { name: 'Lari', code: 'GEL', units: 2 },
  GHS: { name: 'Ghana Cedi', code: 'GHS', units: 2 },
  GIP: { name: 'Gibraltar Pound', code: 'GIP', units: 2 },
  GTQ: { name: 'Quetzal', code: 'GTQ', units: 2 },
  GBP: { name: 'Pound Sterling', code: 'GBP', units: 2 },
  GNF: { name: 'Guinean Franc', code: 'GNF', units: 0 },
  GYD: { name: 'Guyana Dollar', code: 'GYD', units: 2 },
  HTG: { name: 'Gourde', code: 'HTG', units: 2 },
  HNL: { name: 'Lempira', code: 'HNL', units: 2 },
  HKD: { name: 'Hong Kong Dollar', code: 'HKD', units: 2 },
  HUF: { name: 'Forint', code: 'HUF', units: 2 },
  ISK: { name: 'Iceland Krona', code: 'ISK', units: 0 },
  IDR: { name: 'Rupiah', code: 'IDR', units: 2 },
  XDR: { name: 'SDR (Special Drawing Right)', code: 'XDR', units: 0 },
  IRR: { name: 'Iranian Rial', code: 'IRR', units: 2 },
  IQD: { name: 'Iraqi Dinar', code: 'IQD', units: 3 },
  ILS: { name: 'New Israeli Sheqel', code: 'ILS', units: 2 },
  JMD: { name: 'Jamaican Dollar', code: 'JMD', units: 2 },
  JPY: { name: 'Yen', code: 'JPY', units: 0 },
  JOD: { name: 'Jordanian Dinar', code: 'JOD', units: 3 },
  KZT: { name: 'Tenge', code: 'KZT', units: 2 },
  KES: { name: 'Kenyan Shilling', code: 'KES', units: 2 },
  KPW: { name: 'North Korean Won', code: 'KPW', units: 2 },
  KRW: { name: 'Won', code: 'KRW', units: 0 },
  KWD: { name: 'Kuwaiti Dinar', code: 'KWD', units: 3 },
  KGS: { name: 'Som', code: 'KGS', units: 2 },
  LAK: { name: 'Lao Kip', code: 'LAK', units: 2 },
  LBP: { name: 'Lebanese Pound', code: 'LBP', units: 2 },
  LSL: { name: 'Loti', code: 'LSL', units: 2 },
  ZAR: { name: 'Rand', code: 'ZAR', units: 2 },
  LRD: { name: 'Liberian Dollar', code: 'LRD', units: 2 },
  LYD: { name: 'Libyan Dinar', code: 'LYD', units: 3 },
  CHF: { name: 'Swiss Franc', code: 'CHF', units: 2 },
  MOP: { name: 'Pataca', code: 'MOP', units: 2 },
  MKD: { name: 'Denar', code: 'MKD', units: 2 },
  MGA: { name: 'Malagasy Ariary', code: 'MGA', units: 2 },
  MWK: { name: 'Malawi Kwacha', code: 'MWK', units: 2 },
  MYR: { name: 'Malaysian Ringgit', code: 'MYR', units: 2 },
  MVR: { name: 'Rufiyaa', code: 'MVR', units: 2 },
  MRU: { name: 'Ouguiya', code: 'MRU', units: 2 },
  MUR: { name: 'Mauritius Rupee', code: 'MUR', units: 2 },
  XUA: { name: 'ADB Unit of Account', code: 'XUA', units: 0 },
  MXN: { name: 'Mexican Peso', code: 'MXN', units: 2 },
  MXV: { name: 'Mexican Unidad de Inversion (UDI)', code: 'MXV', units: 2 },
  MDL: { name: 'Moldovan Leu', code: 'MDL', units: 2 },
  MNT: { name: 'Tugrik', code: 'MNT', units: 2 },
  MAD: { name: 'Moroccan Dirham', code: 'MAD', units: 2 },
  MZN: { name: 'Mozambique Metical', code: 'MZN', units: 2 },
  MMK: { name: 'Kyat', code: 'MMK', units: 2 },
  NAD: { name: 'Namibia Dollar', code: 'NAD', units: 2 },
  NPR: { name: 'Nepalese Rupee', code: 'NPR', units: 2 },
  NIO: { name: 'Cordoba Oro', code: 'NIO', units: 2 },
  NGN: { name: 'Naira', code: 'NGN', units: 2 },
  OMR: { name: 'Rial Omani', code: 'OMR', units: 3 },
  PKR: { name: 'Pakistan Rupee', code: 'PKR', units: 2 },
  PAB: { name: 'Balboa', code: 'PAB', units: 2 },
  PGK: { name: 'Kina', code: 'PGK', units: 2 },
  PYG: { name: 'Guarani', code: 'PYG', units: 0 },
  PEN: { name: 'Sol', code: 'PEN', units: 2 },
  PHP: { name: 'Philippine Peso', code: 'PHP', units: 2 },
  PLN: { name: 'Zloty', code: 'PLN', units: 2 },
  QAR: { name: 'Qatari Rial', code: 'QAR', units: 2 },
  RON: { name: 'Romanian Leu', code: 'RON', units: 2 },
  RUB: { name: 'Russian Ruble', code: 'RUB', units: 2 },
  RWF: { name: 'Rwanda Franc', code: 'RWF', units: 0 },
  SHP: { name: 'Saint Helena Pound', code: 'SHP', units: 2 },
  WST: { name: 'Tala', code: 'WST', units: 2 },
  STN: { name: 'Dobra', code: 'STN', units: 2 },
  SAR: { name: 'Saudi Riyal', code: 'SAR', units: 2 },
  RSD: { name: 'Serbian Dinar', code: 'RSD', units: 2 },
  SCR: { name: 'Seychelles Rupee', code: 'SCR', units: 2 },
  SLL: { name: 'Leone', code: 'SLL', units: 2 },
  SGD: { name: 'Singapore Dollar', code: 'SGD', units: 2 },
  XSU: { name: 'Sucre', code: 'XSU', units: 0 },
  SBD: { name: 'Solomon Islands Dollar', code: 'SBD', units: 2 },
  SOS: { name: 'Somali Shilling', code: 'SOS', units: 2 },
  SSP: { name: 'South Sudanese Pound', code: 'SSP', units: 2 },
  LKR: { name: 'Sri Lanka Rupee', code: 'LKR', units: 2 },
  SDG: { name: 'Sudanese Pound', code: 'SDG', units: 2 },
  SRD: { name: 'Surinam Dollar', code: 'SRD', units: 2 },
  SEK: { name: 'Swedish Krona', code: 'SEK', units: 2 },
  CHE: { name: 'WIR Euro', code: 'CHE', units: 2 },
  CHW: { name: 'WIR Franc', code: 'CHW', units: 2 },
  SYP: { name: 'Syrian Pound', code: 'SYP', units: 2 },
  TWD: { name: 'New Taiwan Dollar', code: 'TWD', units: 2 },
  TJS: { name: 'Somoni', code: 'TJS', units: 2 },
  TZS: { name: 'Tanzanian Shilling', code: 'TZS', units: 2 },
  THB: { name: 'Baht', code: 'THB', units: 2 },
  TOP: { name: "Pa'anga", code: 'TOP', units: 2 },
  TTD: { name: 'Trinidad and Tobago Dollar', code: 'TTD', units: 2 },
  TND: { name: 'Tunisian Dinar', code: 'TND', units: 3 },
  TRY: { name: 'Turkish Lira', code: 'TRY', units: 2 },
  TMT: { name: 'Turkmenistan New Manat', code: 'TMT', units: 2 },
  UGX: { name: 'Uganda Shilling', code: 'UGX', units: 0 },
  UAH: { name: 'Hryvnia', code: 'UAH', units: 2 },
  AED: { name: 'UAE Dirham', code: 'AED', units: 2 },
  USN: { name: 'US Dollar (Next day)', code: 'USN', units: 2 },
  UYU: { name: 'Peso Uruguayo', code: 'UYU', units: 2 },
  UYI: {
    name: 'Uruguay Peso en Unidades Indexadas (UI)',
    code: 'UYI',
    units: 0,
  },
  UYW: { name: 'Unidad Previsional', code: 'UYW', units: 4 },
  UZS: { name: 'Uzbekistan Sum', code: 'UZS', units: 2 },
  VUV: { name: 'Vatu', code: 'VUV', units: 0 },
  VES: { name: 'Bol??var Soberano', code: 'VES', units: 2 },
  VND: { name: 'Dong', code: 'VND', units: 0 },
  YER: { name: 'Yemeni Rial', code: 'YER', units: 2 },
  ZMW: { name: 'Zambian Kwacha', code: 'ZMW', units: 2 },
  ZWL: { name: 'Zimbabwe Dollar', code: 'ZWL', units: 2 },
  XBA: {
    name: 'Bond Markets Unit European Composite Unit (EURCO)',
    code: 'XBA',
    units: 0,
  },
  XBB: {
    name: 'Bond Markets Unit European Monetary Unit (E.M.U.-6)',
    code: 'XBB',
    units: 0,
  },
  XBC: {
    name: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)',
    code: 'XBC',
    units: 0,
  },
  XBD: {
    name: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)',
    code: 'XBD',
    units: 0,
  },
  XTS: {
    name: 'Codes specifically reserved for testing purposes',
    code: 'XTS',
    units: 0,
  },
  XXX: {
    name: 'The codes assigned for transactions where no currency is involved',
    code: 'XXX',
    units: 0,
  },
  XAU: { name: 'Gold', code: 'XAU', units: 0 },
  XPD: { name: 'Palladium', code: 'XPD', units: 0 },
  XPT: { name: 'Platinum', code: 'XPT', units: 0 },
  XAG: { name: 'Silver', code: 'XAG', units: 0 },
}

/**
 * All valid ISO currency codes.
 * @internal
 */
export const ISOValidCurrencyCodes = Object.keys(ISOCurrencies)
