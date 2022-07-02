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
        return null;
    }

}



class StudentCl extends PersonCl {

    constructor(fullName, birthYear, course) {
        // always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        return `My self ${this.fullName} and i studied in ${this.course}`;
    }

    // overwright parent class method  
    calcAge() {
        return `${2048 - this.birthYear}`;
    }
}


const martha = new StudentCl("Martha Denial", 2041, "bachelor of science");
const stephen = new StudentCl("Stephen gley", 1988, "Cricket");

console.log(martha);
console.log(martha.calcAge());
console.log(martha.introduce());
console.log(stephen);
console.log(stephen.introduce());
console.log(stephen.calcAge());
