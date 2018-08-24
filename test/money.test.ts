import * as chai from 'chai';
import { Dollar } from '../src/Dollar';

describe("MoneyTest", () => {
    it('testMutiplication', () => {
        var five = new Dollar(5);
        var product = five.Times(2);
        chai.assert.equal(product.amount, 10);
        product = five.Times(3);
        chai.assert.equal(product.amount, 15);
    })
    it('testEquality', () => {
        chai.assert.isTrue(new Dollar(5).equals(new Dollar(5)));
    })
});