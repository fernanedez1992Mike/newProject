import { HasFormatter } from '../interfaces/HasFormmatter';
// Classes

export class invoice implements HasFormatter {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    // has to have format method to work properly
    format() {
        return `${this.client} Loves Money ${this.amount} for ${this.details} `
    }

}