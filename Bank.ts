import { Expression } from "./Expression";
import { RateKey } from "./RateKey";

export type Currencies = "USD" | "CHF";

export class Bank {
  private _rateMap = new Map<string, number>();
  constructor() {}

  addRate(
    currencyFrom: Currencies,
    currencyTo: Currencies,
    exchangeRate: number
  ): void {
    //We should set up exchanges both directions not force user
    const key = new RateKey(currencyFrom, currencyTo).getKey();
    const keyTwo = new RateKey(currencyTo, currencyFrom).getKey();
    if (this._rateMap.has(key)) {
      throw new Error("Duplicate rate mappings are not allowed");
    }
    this._rateMap.set(key, exchangeRate);
    this._rateMap.set(keyTwo, 1 / exchangeRate);
  }

  getRate(from: Currencies, to: Currencies): number {
    if (this._isEqualRates(from, to)) return 1;

    const key = new RateKey(from, to).getKey();
    if (!this._rateMap.has(key)) {
      throw new Error("Rate mapping does not exist");
    }
    return this._rateMap.get(key)!;
  }

  reduce(sum: Expression, outputCurrency: Currencies) {
    return sum.reduce(this, outputCurrency);
  }

  private _isEqualRates(from: Currencies, to: Currencies) {
    return from === to;
  }
}
