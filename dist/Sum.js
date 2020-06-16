"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sum = void 0;
const Money_1 = require("./Money");
class Sum {
    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }
    reduce(bank, outputCurrency) {
        const amount = this.augend.reduce(bank, outputCurrency).amount +
            this.addend.reduce(bank, outputCurrency).amount;
        return new Money_1.Money(amount, outputCurrency);
    }
    plus(addend) {
        return new Sum(this, addend);
    }
    times(multiplier) {
        return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
    }
}
exports.Sum = Sum;
