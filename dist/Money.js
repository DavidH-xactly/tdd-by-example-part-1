"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
const Sum_1 = require("./Sum");
class Money {
    constructor(_amount, _currency) {
        this._amount = _amount;
        this._currency = _currency;
    }
    static dollar(amount) {
        return new Money(amount, "USD");
    }
    static franc(amount) {
        return new Money(amount, "CHF");
    }
    get currency() {
        return this._currency;
    }
    get amount() {
        return this._amount;
    }
    equals(money) {
        return this._amount === money._amount && this.currency === money.currency;
    }
    times(multiplier) {
        return new Money(this._amount * multiplier, this.currency);
    }
    plus(addend) {
        return new Sum_1.Sum(this, addend);
    }
    reduce(bank, outputCurrency) {
        const rate = bank.getRate(this.currency, outputCurrency);
        return new Money(this.amount / rate, outputCurrency);
    }
}
exports.Money = Money;
