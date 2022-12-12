"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMoney = void 0;
class AbstractMoney {
    constructor(currency, amount) {
        this.currency = currency;
        this.amount = amount;
        // Prevent object modification
        Object.freeze(this);
    }
    /**
     * @returns The amount value.
     */
    getAmount() {
        return this.amount;
    }
    /**
     * @returns The currency code.
     */
    getCurrency() {
        return this.currency;
    }
}
exports.AbstractMoney = AbstractMoney;
