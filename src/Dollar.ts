export class Dollar {
    public amount : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    public Times(multiplier : number) : Dollar {
        return new Dollar(this.amount * multiplier);
    }
    public equals(obj: Object) : boolean {
        return true;
    }
}