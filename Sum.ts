import { Money } from "./Money";
import { Expression } from "./Expression";
import { Currencies, Bank } from "./Bank";

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank: Bank, outputCurrency: Currencies) {
    const amount =
      this.augend.reduce(bank, outputCurrency).amount +
      this.addend.reduce(bank, outputCurrency).amount;
    return new Money(amount, outputCurrency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }
}
