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


let a = 10;
var b = 20;
const c = 30;

function z() {
    b = 40;
    console.log(b);
    return b;
}
console.log(z());
// console.log(d);
console.log(b);
// console.log(f);

