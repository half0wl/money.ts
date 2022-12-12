import { CurrencyCode } from '../Currency';
declare abstract class AbstractMoney<T extends CurrencyCode = CurrencyCode> {
    private readonly currency;
    private readonly amount;
    constructor(currency: T, amount: number);
    /**
     * @returns The amount value.
     */
    getAmount(): number;
    /**
     * @returns The currency code.
     */
    getCurrency(): T;
}
interface IMoney<T extends CurrencyCode = CurrencyCode> {
    getAmount(): number;
    getCurrency(): T;
    add(...n: AbstractMoney<T>[]): AbstractMoney<T>;
    subtract(...n: AbstractMoney<T>[]): AbstractMoney<T>;
    multiply(n: number): AbstractMoney<T>;
    divide(n: number): AbstractMoney<T>;
    equals(m: AbstractMoney<T>): boolean;
    greaterThan(m: AbstractMoney<T>): boolean;
    greaterThanOrEqual(m: AbstractMoney<T>): boolean;
    lessThan(m: AbstractMoney<T>): boolean;
    lessThanOrEqual(m: AbstractMoney<T>): boolean;
    toLocaleString(locale?: string): string;
    toJSON(): {
        amount: number;
        currency: T;
    };
}
export { AbstractMoney, IMoney };
//# sourceMappingURL=index.d.ts.map