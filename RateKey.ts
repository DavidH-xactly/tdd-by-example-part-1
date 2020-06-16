import { Currencies } from "./Bank";

export class RateKey {
  constructor(private _from: Currencies, private _to: Currencies) {
    return this;
  }

  getKey() {
    return `${this._from}:${this._to}`;
  }
}
