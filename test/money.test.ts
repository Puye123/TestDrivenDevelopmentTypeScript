import * as chai from 'chai';
import { Dollar } from '../src/Dollar';
import { Franc } from '../src/Franc';

describe("MoneyTest", () => {
    it('testMutiplication', () => {
        var five = new Dollar(5);
        chai.assert.isTrue(five.Times(2).equals(new Dollar(10)));
        chai.assert.isTrue(five.Times(3).equals(new Dollar(15)));
    })
    it('testEquality', () => {
        chai.assert.isTrue(new Dollar(5).equals(new Dollar(5)));
        chai.assert.isFalse(new Dollar(5).equals(new Dollar(6)));
    })
    it('testFrancMultiplication', () => {
        var five = new Franc(5);
        chai.assert.isTrue(five.Times(2).equals(new Dollar(11)));
        chai.assert.isTrue(five.Times(3).equals(new Dollar(15)));
    })
});