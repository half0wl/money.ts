/**
 * Utility to convert currency data from https://datahub.io/core/currency-codes
 * into a TypeScript file.
 *
 * It takes in the JSON file as input, performs some filtering, transforms it
 * into TypeScript types and a typed dictionary object, runs prettier on the
 * auto-generated code, and writes it to the specified output file.
 *
 * Usage:
 * ```sh
 * $ yarn gen-currency-data
 * ```
 */
import { readFile, writeFile } from 'fs/promises'
import prettier from 'prettier'

interface Raw {
  AlphabeticCode: string | null
  Currency: string
  Entity: string
  MinorUnit: string
  NumericCode: number | null
  WithdrawalDate: string | null
}

interface Validated extends Omit<Raw, 'AlphabeticCode' | 'WithdrawalDate'> {
  AlphabeticCode: string
  WithdrawalDate: string
}

type Transformed = Record<
  string,
  {
    name: string
    code: string
    units: number
  }
>

const readInput = async (filename: string) => {
  console.log(`> Reading file: ${filename}`)
  return await readFile(filename, 'utf8')
}

const toJson = (data: string) => {
  return JSON.parse(data) as Raw[]
}

const filterCurrencies = (data: Raw[]): Validated[] => {
  return (
    data
      // Remove inactive currencies:
      .filter((r) => r.WithdrawalDate === null)
      // Remove invalid currencies:
      .filter((r) => r.AlphabeticCode !== null) as Validated[]
  )
}

const transform = (data: Validated[]): Transformed => {
  let transformed: Transformed = {}
  for (const raw of data) {
    transformed[raw.AlphabeticCode] = {
      name: raw.Currency,
      code: raw.AlphabeticCode,
      units:
        raw.MinorUnit === '-' || !raw.MinorUnit
          ? 0
          : parseInt(raw.MinorUnit, 10),
    }
  }
  return transformed
}

const toTypescript = (data: Transformed): string => {
  const stringifiedJson = JSON.stringify(data)
  const stringifiedKeys = Object.keys(data)
    .map((k) => ` '${k}'\n`)
    .join('|')

  return `/**
* All major and active ISO-4217 currencies.
*
* Sourced from https://datahub.io/core/currency-codes (on 2022-12-10)
* Auto-generated using \`$PROJECT_ROOT/tools/GenerateCurrencyData.ts\`
* with \`$PROJECT_ROOT/resources/iso_currency_data.json\` as input.
*
* [Generated on ${new Date().toISOString()}]
*/

import { CurrencyCode, Currency } from './'

/**
 * Enumeration of valid ISO-4217-3 currency codes.
 * @internal
 */
export type ISOCurrencyCode =
|${stringifiedKeys}
& CurrencyCode

/**
 * Mapping of currency code->data for ISO Currencies.
 * @internal
 */
export const ISOCurrencies: Record<ISOCurrencyCode, Currency<ISOCurrencyCode>> =
${stringifiedJson}


/**
 * All valid ISO currency codes.
 * @internal
 */
export const ISOValidCurrencyCodes = Object.keys(ISOCurrencies)
`
}

const prettify = (code: string) => {
  return prettier.format(code, {
    parser: 'typescript',
    trailingComma: 'all',
    semi: false,
    singleQuote: true,
  })
}

const writeOutput = async (filename: string, data: string) => {
  console.log(`> Writing file: ${filename}`)
  return await writeFile(filename, data)
}

const inputFilename = process.argv[2]
if (!inputFilename) {
  console.error('ERROR: You must supply an input filename.')
  process.exit(1)
}

const outputFilename = process.argv[3]
if (!outputFilename) {
  console.error('ERROR: You must supply an output filename.')
  process.exit(1)
}

readInput(inputFilename)
  .then((data) => toJson(data))
  .then((json) => filterCurrencies(json))
  .then((filtered) => transform(filtered))
  .then((transformed) => toTypescript(transformed))
  .then((generated) => prettify(generated))
  .then((prettified) => writeOutput(outputFilename, prettified))
