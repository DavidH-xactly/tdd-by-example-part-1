import { Currencies, Bank } from "./Bank";
import { Money } from "./Money";

export interface Expression {
  reduce: (bank: Bank, outputCurrency: Currencies) => Money;
  times: (multiplier: number) => Expression;
  plus: (addend: Expression) => Expression;
}
