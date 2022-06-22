/* const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);

const addFee = amount => amount + 2;
const addDiscount = amount => amount - 5;
const addSurplus = amount => amount + 10;
const removeSurplus = amount => amount - 15;

const composition = compose(addFee, addDiscount, addSurplus, removeSurplus)(100);
// console.log(addFee(100));

console.log(composition); */

/* const object = {
    val1: 1,
    val2: 2
};

const a = Reflect.get(object, 'val1', hello);
console.log(a);
 */
/* const abc = { val: 21 };
console.log(Reflect.get(abc, "val") === 21);
console.log(Reflect.get(abc, "x") === undefined);
console.log(Reflect.get(abc, "y") === 21);

const array1 = ['geeks1', 'geeks2', 'geeks3', 'geeks4'];
console.log(Reflect.get(array1, 3)); */

/*
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = false ?? 42;
console.log(baz);

// expected output: 0 */


/* let a = 10;
var b = 20;
const c = 30;
const arr = [1, 5, 6, 85];
console.log(arr);

function z() {
    b = 40;
    console.log(b);
    return b;
}
console.log(z()); */
// console.log(d);
// console.log(b);
// console.log(f);



/* Bind call and apply methods in javascript function */

/* let obj1 = {
    firstName: "Khemchand",
    lastName: "Ojha"
};

let obj2 = {
    fullName: function () {
        console.log(this);
    }
};

// obj2.fullName.call(obj1, "Rameshchandra", "Ramsaran");
obj2.fullName.call();
obj2.fullName.apply(obj1); */



/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    console.log(this);
    // Product.call(this, name, price);
    // this.category = 'food';
}

function Toy(name, price) {
    name = "xyz";
    // Product.call(this, name, price);
    console.log(this);
    this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
 */
// console.log(cheese());
// console.log(fun.name, fun.category);
// Toy();

/* let obj = {
    firstName: "Khemchand",
    lastName: "Ojha",
    middleName: "Rameshchandra"
};

function set(a, b) {
    console.log(`${a} ${b} Myself ${this.firstName} ${this.middleName} ${this.lastName}`);
}
let mySet = set.bind(obj);
mySet("My", "Dear");



Function.prototype.mybind = function (arg) {
    let fun = this;
    console.log(arg);
    return function () {
        fun.call(arg);
    };
};


let mySet1 = set.mybind(obj);
mySet();

 */




// OOP in js

const Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

};


const ankit = new Person("Ankit", "panara");


Person.prototype.name = function () {
    return "Vijay";
};


// console.log(Person.prototype);
// console.log(ankit.__proto__);
// console.log(ankit);