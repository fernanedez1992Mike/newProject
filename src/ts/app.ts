/* Sections */
const section0 = document.getElementById("section0");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

/* Brand Colors */
const c1: string = '#932A2B';
const c2: string = '#FCBE79';
const c3: string = '#FFE5BE';

let brandColors: string[];

brandColors = [c1, c2, c3];

let colors: any = [c1, c2, c3];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

strNumTuple = ['Hello', 4];
console.log(strNumTuple);


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

function getSum(num1:number, num2:number):number {
    return num1 + num2;
}

//console.log(getSum(1,4));

let mySum = function(num1:any, num2:any){
    if (typeof num1 == "string"){
        num1 = parseInt(num1);    
    }
    return num1 + num2;
}

//console.log(mySum('1',2));

function getName(firstName: string, lastName: string): string {
    if (lastName == undefined){
        return firstName;
    }
    return firstName + " " + lastName;
}

console.log(getName('Mike', "Doe"));

// Interfaces 
/*
function showTodo(todo: {title:string, text:string}){
    console.log(todo.title +  ' ' + todo.text);

}

let myTodo = {title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);
*/

interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: {title:string, text:string}){
    console.log(todo.title +  ' ' + todo.text);

}
let myTodo = {title: 'Trash', text: 'Take out trash'}
showTodo(myTodo);

interface userInterface {
    name: string;
    email: string;
    age: number;
    register()void;
    payInvoice();
}

class User implements userInterface {
   name: string;
   email: string;
   age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }

    register(){
        console.log(this.name+' is now registered');
    }

    payInvoice(){
        console.log(this.name+ ' paid Invoice');
    }

}

let john = new User("John Doe", 'john@gmail.com', + 23);

john.register();

class Member  extends User {
    id : number;

    constructor(id:number, name:string, email:string, age:number ){
        super(name, email, age);
        this.id = id;        
    }

    payInvoice(){
        super.payInvoice();
    }

}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmsil.com', 30);
mike.payInvoice();

let Kate: User = new Member(2, 'Kate', 'kate@yahoo.com', 24);

let fn = () => 'response';
