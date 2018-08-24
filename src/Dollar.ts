export class Dollar {
    public amount : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    public Times(multiplier : number) : Dollar {
        this.amount *= multiplier;
        return null;
    }
}