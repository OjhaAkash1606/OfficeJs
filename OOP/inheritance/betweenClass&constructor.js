const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2049 - this.birthYear);
};



const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;

};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;  this is wrong way to create prototype


Student.prototype.introduce = function () {

    console.log(`My name is ${this.firstName} and i study in ${this.course}`);

};


// console.log(Student());

const Mike = new Student("Mike", 2009, "Computer Science");
console.log(Mike);

Mike.calcAge();
Mike.introduce();
