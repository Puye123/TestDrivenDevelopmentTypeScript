import * as chai from 'chai';
import { Dollar } from '../src/Dollar';

describe("MoneyTest", () => {
    it('testMutiplication', () => {
        var five = new Dollar(5);
        five.Times(2);
        chai.assert.equal(five.amount, 10);
    })
});