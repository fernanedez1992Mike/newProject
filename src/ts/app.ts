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

interface Shape {
    x: number
    y: number 
}

abstract class Shape {
    public x: number
    public y: number

    constructor(x: number, y: number){
        this.x = x
        this.y = y;
    }
    abstract get area(): number
}

class Square extends Shape {
    public w: number
    public h: number
    constructor(x: number, y: number, w: number, h: number){
        super(x, y)
        this.w = w
        this.h = h
    }
    public get area(){
        return this.w * this.h
    }
}

class Circle extends Shape {
    public r: number 
    constructor(x: number, y:number, r:number){
        super(x, y)
        this.r = r
    }
    public get area(){
        return Math.PI * Math.pow(this.r, 2)
    }
}

class Triangle extends Shape {
    public h: number
    constructor(x: number, y: number, h:number){
        super(x, y)
        this.h = h
    }
    public get area(){
        return this.x *this.y * this.h
    }
}

var myCircle = new Circle(0, 0, 5);
console.log(myCircle.x, myCircle.y, myCircle.area)

var myRect = new Square(2, 5, 10, 30);
console.log(myRect.x, myRect.y, myRect.area);

var myTri = new Triangle(3, 4, 5);
console.log(myTri.x, myTri.y, myTri.area);


abstract class ContentBlock {
    public bodyCopy: string;
    public h1: string;
    public h6: string;

    constructor(bodyCopy: string, h1:string, h6:string){
        this.bodyCopy = bodyCopy
        this.h1 = h1
        this.h6 = h6        
    }

    abstract get content(): string    
}

class Intro extends ContentBlock {
    public welcome: string;

    constructor(bodyCopy:string, h1:string, welcome:string) {
        super(bodyCopy, h1, welcome);
        this.welcome = welcome;
    }

    public get content(){
        return this.bodyCopy + this.h1 + this.welcome;
    }
}

class Image extends ContentBlock {
    public img: string;

    constructor(bodyCopy:string, h1:string, img:string){
        super(bodyCopy, h1, img)
        this.img = img
    }

    public get content(){
        return this.img;
    }
}

let newBlock = new Intro('Learning new skills', 'classes are awesome', 'add an image or something!');
console.log(newBlock.bodyCopy, newBlock.h1, newBlock.h6);

let bioBlock = new Intro('New block for practice', 'Puppies are awesome', 'it is working');
console.log(bioBlock.bodyCopy, bioBlock.h1, bioBlock.welcome);

let newImg = new Image ('New image', 'Image title', 'image src');
console.log(newImg.bodyCopy, newImg.h1, newImg.img);


let slideIndex:number = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n:number){
    return showSlides( slideIndex += n );
}

function currentSlide(n: number){
    return showSlides( slideIndex = n);
}

// I do not understand why plusSides and currentSlide is returned as undefined?

function showSlides(n:number):void {
    let i;
    let slides: NodeListOf<HTMLElement> = document.querySelectorAll('.wrapperItem');
    let dots: NodeListOf<HTMLElement> = document.querySelectorAll('.dot');

    if(n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex -1].style.display = 'block';
    dots[slideIndex -1].className += 'active';
}



















