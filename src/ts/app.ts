import {invoice} from './classes/Invoice';
import {payments} from './classes/payments';
import {HasFormatter} from './interfaces/HasFormmatter';
import {listTemplate} from './classes/listTemplate';




let docOne: HasFormatter;
docOne = new invoice ('Yoshi', 'web work', 250);
let docs: HasFormatter[] = [];
docs.push(docOne);

let form = document.querySelector('.new-item-form') as HTMLFormElement;
let inputs = document.querySelectorAll('input')!;
let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;
let ul = document.querySelector('.footerNotes') as HTMLElement;
let list = new listTemplate(ul)!;

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

let invoices: invoice[] = [];

invoices.forEach(inv => {
    console.log(inv.client,inv.format());
});

// Interface 
interface isPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'Mike',
    age: 28,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number {
        console.log(`I spent`, amount);
        return amount;
    }
};

const greetPerson = (person: isPerson) => {
    console.log(`hello`, person.name);
}

greetPerson(me);




























