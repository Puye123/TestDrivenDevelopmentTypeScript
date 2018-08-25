export class Dollar {
    private amount : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    public Times(multiplier : number) : Dollar {
        return new Dollar(this.amount * multiplier);
    }
    public equals(obj: Object) : boolean {
        var dollar = obj as Dollar;
        return this.amount == dollar.amount;
    }
}