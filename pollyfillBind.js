let obj = {
    firstName: "Khemchand",
    lastName: "Ojha",
    middleName: "Rameshchandra"
};


function set(a, b) {
    console.log(`${a} ${b} Myself ${this.firstName} ${this.middleName} ${this.lastName}`);
}


let mySet = set.bind(obj);
mySet("Hello", "Dear");




Function.prototype.mybind = function (...arg) {
    let fun = this;
    let param = arg.slice(1);
    return function (...arg2) {
        fun.apply(arg[0], [...param, ...arg2]);
    };
};

let mySet1 = set.mybind(obj);
mySet1("Hello", "Dear");



