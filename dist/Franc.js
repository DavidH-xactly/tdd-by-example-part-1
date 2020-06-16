"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Franc = void 0;
const Money_1 = require("./Money");
class Franc extends Money_1.Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}
exports.Franc = Franc;
