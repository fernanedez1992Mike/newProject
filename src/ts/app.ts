/* Sections */
const section0 = document.getElementById("section0");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

/* Brand Colors */
const c1: string = '#932A2B';
const c2: string = '#FCBE79';
const c3: string = '#FFE5BE';

let colors: any = [c1, c2, c3];

/* ContentBlock includes | h2-header,h6-subHeader,p-bodyCopy, h4-price */
let bodyCopy = document.getElementsByTagName('p');

/* Form Selections */
let button = document.getElementById('button');

function add(n1:number, n2:number) {
    return n1+n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle (n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

let combineValues: (a: number, b:number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10,40,(result)=>{
    console.log(result);
});

//generateError('An error occured!', 500);














