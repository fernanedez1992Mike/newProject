import {invoice} from './classes/Invoice';
import {payments} from './classes/payments';
import {HasFormatter} from './interfaces/HasFormmatter';
import { listTemplate } from './classes/listTemplate';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new invoice ('Yoshi', 'web work', 250);
docTwo = new payments ('John', 'Logo', 150 );

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);
/* Sections */
const section0 = document.getElementById("section0");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

let sectionID: Array<any> = [section0, section1, section2];

/* Brand Colors */
const c1: string = '#932A2B';
const c2: string = '#FCBE79';
const c3: string = '#FFE5BE';

let brandColors: string[];
brandColors = [c1, c2, c3];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

/* ContentBlock includes | h2-header,h6-subHeader,p-bodyCopy, h4-price */
let contentBlock = document.getElementsByClassName('contentBlock');
let bodyCopy = document.getElementsByTagName('p');

/* Form Selections */

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

let next:any = document.getElementById("wrapperNext") as HTMLElement;
let prev: any = document.getElementById("wrapperPrev") as HTMLElement;
let wrapperContainer: any = document.getElementById("wrapperProduct0") as HTMLElement;
let items:any = document.getElementsByClassName('wrapperItem')!;

console.log(items);

next.addEventListener('click' , function(){
        wrapperContainer.style.backgroundColor = 'yellow';
        items.style.display = 'none';
});












