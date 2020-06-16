import { HasFormatter } from '../interfaces/HasFormmatter';
// Classes

export class payments implements HasFormatter {

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    // has to have format method to work properly
    format() {
        return `${this.recipient} is our Marketing guy ${this.amount} for ${this.details} `
    }

}