const PersonProto = {
    calcAge() {
        return 2052 - this.birthYear;
    },

    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
};


const StudentProto = Object.create(PersonProto);

StudentProto.init = function (name, birthYear, course) {
    PersonProto.init.call(this, name, birthYear);
    this.course = course;
    console.log(this);
};

PersonProto.introduce = function () {
    return `Hello, My self ${this.name} and i studied in ${this.course}`;
};

const jay = Object.create(StudentProto);
jay.init("Jay", 1980, "C sharp");
console.log(jay.introduce());
console.log(jay.calcAge());

console.log(jay);