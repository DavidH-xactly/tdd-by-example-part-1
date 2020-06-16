import { Money } from "../Money";
import { Expression } from "../Expression";
import { Sum } from "../Sum";
import { Bank } from "../Bank";

describe("Money Tests", () => {
  test("Should create Money object", () => {
    const money = Money.dollar(5);
    expect(typeof money).toEqual("object");
  });

  test("equals method should return true when items are equal", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  });

  test("equals method should return false when items are not equal", () => {
    expect(Money.dollar(5).equals(Money.dollar(7))).toEqual(false);
  });

  test("Equals should be false for types with different classes", () => {
    expect(Money.dollar(5).equals(Money.franc(5))).toEqual(false);
  });

  test("should have the correct currency", () => {
    expect(Money.dollar(1).currency).toEqual("USD");
    expect(Money.franc(1).currency).toEqual("CHF");
  });

  test("Should multiply correctly", () => {
    const dollarFive = Money.dollar(5);
    expect(dollarFive.times(2)).toEqual(Money.dollar(10));
    expect(dollarFive.times(3)).toEqual(Money.dollar(15));
  });

  test("Should add same currencies", () => {
    const sum: Expression = new Sum(Money.dollar(5), Money.dollar(5));
    const bank = new Bank();
    const reduced: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
  });

  test("Should add different currencies", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    expect(Money.dollar(10)).toEqual(result);
  });

  test("Should add to a sum", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(15)).toEqual(result);
  });

  test("Should multiply a sum", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(20)).toEqual(result);
  });
});
