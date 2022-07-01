/* 
classes :- classes are not hoisted. means  it is required to declare the class before invoking it.
           classes are first class citizens. (pass it into function and return it from function)
           classes are executed always in strict mode.
*/


class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // all methods defines here works as .prototype
    calcAge() {
        return 2050 - this.birthYear;
    }

    get age() {
        return 2050 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a fullName`);
    }

    get fullName() {
        return this._fullName;
    }

    // static methods 
    static hey() {
        console.log("Hey PersonCl 👋👋👋");
    }

}

PersonCl.prototype.greet = function () {
    return `Hello ${this.fullName}`;
};


const jessica = new PersonCl("Jessica black", 2000);

console.log(jessica.calcAge());
console.log(jessica.age);
// console.log(jessica.fullName = "Akash");
console.log(jessica.greet());
console.log(PersonCl.hey());


/* 
const a = [10, 20, 30, 4, 0, 50];
console.log(a.pop());
*/


// Getter and setter

const account = {
    name: "Jonas",
    movements: [10, 50, 6, 89, 36],

    /* latest() {
        return this.movements.pop();
    } */

    get latest() {
        return this.movements.pop();
    },

    set latest(mov) {
        return this.movements.push(mov);
    }

};


// console.log(account.latest());
account.latest = 30;
console.log(account.latest);


// direct methods in classes