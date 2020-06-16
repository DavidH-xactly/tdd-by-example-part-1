"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateKey = void 0;
class RateKey {
    constructor(_from, _to) {
        this._from = _from;
        this._to = _to;
        return this;
    }
    getKey() {
        return `${this._from}:${this._to}`;
    }
}
exports.RateKey = RateKey;
