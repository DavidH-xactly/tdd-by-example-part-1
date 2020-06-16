"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const RateKey_1 = require("./RateKey");
class Bank {
    constructor() {
        this._rateMap = new Map();
    }
    addRate(currencyFrom, currencyTo, exchangeRate) {
        //We should set up exchanges both directions not force user
        const key = new RateKey_1.RateKey(currencyFrom, currencyTo).getKey();
        const keyTwo = new RateKey_1.RateKey(currencyTo, currencyFrom).getKey();
        if (this._rateMap.has(key)) {
            throw new Error("Duplicate rate mappings are not allowed");
        }
        this._rateMap.set(key, exchangeRate);
        this._rateMap.set(keyTwo, 1 / exchangeRate);
    }
    getRate(from, to) {
        if (this._isEqualRates(from, to))
            return 1;
        const key = new RateKey_1.RateKey(from, to).getKey();
        if (!this._rateMap.has(key)) {
            throw new Error("Rate mapping does not exist");
        }
        return this._rateMap.get(key);
    }
    reduce(sum, outputCurrency) {
        return sum.reduce(this, outputCurrency);
    }
    _isEqualRates(from, to) {
        return from === to;
    }
}
exports.Bank = Bank;
