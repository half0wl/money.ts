import { CurrencyCode } from '../Currency'

abstract class AbstractMoney<T extends CurrencyCode = CurrencyCode> {
  private readonly currency: T
  private readonly amount: number

  constructor(currency: T, amount: number) {
    this.currency = currency
    this.amount = amount
    // Prevent object modification
    Object.freeze(this)
  }

  /**
   * @returns The amount value.
   */
  public getAmount(): number {
    return this.amount
  }

  /**
   * @returns The currency code.
   */
  public getCurrency(): T {
    return this.currency
  }
}

interface IMoney<T extends CurrencyCode = CurrencyCode> {
  getAmount(): number
  getCurrency(): T

  add(...n: AbstractMoney<T>[]): AbstractMoney<T>
  subtract(...n: AbstractMoney<T>[]): AbstractMoney<T>
  multiply(n: number): AbstractMoney<T>
  divide(n: number): AbstractMoney<T>

  equals(m: AbstractMoney<T>): boolean
  greaterThan(m: AbstractMoney<T>): boolean
  greaterThanOrEqual(m: AbstractMoney<T>): boolean
  lessThan(m: AbstractMoney<T>): boolean
  lessThanOrEqual(m: AbstractMoney<T>): boolean

  toLocaleString(locale?: string): string
  toJSON(): { amount: number; currency: T }
}

export { AbstractMoney, IMoney }
