"use strict";

/* 
constructor function
    New blank object {} is created
    function is called ,this = {}
    {} linked to prototype
    Newly created object is return automatically from the constructor function call.
*/

const Person = function (firstName, birthYear) {

    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this

    /* 
    this.calAge = function () {
         console.log(`${2037 - this.birthYear}`);
     };
    */
};

//  Static methods which is not inherited it is used only with Person
Person.hey = function () {
    console.log("Hey Person 👋👋👋 ");
};
console.log(Person.hey());


Object.prototype.totalAge = function () {
    console.log("this.birthYear");
    return (this.birthYear + 1000) / 2;
};

Person.prototype.calAge = function () {
    this.name = this.birthYear;
    console.log(`${2050 - this.name}`);
};

Person.prototype.species = "Homo sapience";

/* 
Note: - Person.prototype is not prototype of Person but it is prototype of object which is created
        using Person constructor.

      - Person.prototype.constructor is pointing to itself Person.
*/



let Jonas = new Person("Jonas", 1991);
let Matilda = new Person("Matilda", 1995);



console.log(Jonas.calAge());

console.log(Person.prototype);
console.log(Jonas.__proto__ === Person.prototype); //true


console.log(Person.prototype.isPrototypeOf(Jonas)); //true
console.log(Person.prototype.isPrototypeOf(Matilda));//true
console.log(Person.prototype.isPrototypeOf(Person)); //false

console.log(Jonas.hasOwnProperty("firstName")); //true0
console.log(Jonas.hasOwnProperty("species")); // false


console.log(Person.prototype.constructor === Person); // true


