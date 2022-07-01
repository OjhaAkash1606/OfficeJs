const PersonProto = {
    calcAge() {
        return 2052 - this.birthYear;
    },

    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

steven.name = "Steven";
steven.birthYear = 2000;


console.log(steven);

console.log(steven.__proto__ === PersonProto);


const jack = Object.create(steven);
console.log(jack.calcAge());

console.log(jack.init("Jack", 2001));
