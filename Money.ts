import { Expression } from "./Expression";
import { Sum } from "./Sum";
import { Bank, Currencies } from "./Bank";

export class Money {
  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }

  constructor(protected _amount: number, protected _currency: Currencies) {}

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  equals(money: Money) {
    return this._amount === money._amount && this.currency === money.currency;
  }

  times(multiplier: number): Expression {
    return new Money(this._amount * multiplier, this.currency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, outputCurrency: Currencies) {
    const rate = bank.getRate(this.currency, outputCurrency);
    return new Money(this.amount / rate, outputCurrency);
  }
}
