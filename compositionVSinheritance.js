var mixing = function (target, ...source) {
    Object.assign(target, ...source);
};



var eating = {
    eat: function () {
        return "I can eat! <br>";
    }
};

var talking = {
    talk: function () {
        return "I can talk! <br>";
    }
};

var walking = {
    walk: function () {
        return "I can walk! <br>";
    }
};



/* 
// const Rahul = Object.assign({}, eating, talking, walking);
// const Robot = Object.assign({}, talking, walking);


// console.log(Rahul.walk());
// console.log(Robot.walk());
// console.log(Rahul.talk());
// console.log(Robot.talk());
// console.log(Rahul.eat());
*/

var Human = function () {

};

var Robot = function () {

};

var Rahul = new Human();
let RobotCop = new Robot();



/* 

Object.assign(Human.prototype, eating, talking, walking);
Object.assign(Robot.prototype, talking, walking);



console.log(Rahul.eat());
console.log(Rahul.walk());
console.log(Rahul.talk());
console.log(RobotCop.talk());
console.log(RobotCop.walk());

*/

/*  */




mixing(Human.prototype, eating, talking, walking);
mixing(Robot.prototype, talking, walking);


console.log(Rahul.eat());
console.log(Rahul.walk());
console.log(Rahul.talk());

console.log(RobotCop.talk());
console.log(RobotCop.walk());
