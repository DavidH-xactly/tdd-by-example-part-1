"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dollar = void 0;
const Money_1 = require("./Money");
class Dollar extends Money_1.Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}
exports.Dollar = Dollar;
