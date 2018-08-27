export class Franc {
    private amount : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    public Times(multiplier : number) : Franc {
        return new Franc(this.amount * multiplier);
    }
    public equals(obj: Object) : boolean {
        var franc = obj as Franc;
        return this.amount == franc.amount;
    }
}