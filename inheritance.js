
//parent class
class Person
{
    constructor(name, age)   //parent constructor
    {
        this.name=name;     // refers to object instance of the class
        this.age=age;
    }

    getDeails()
    {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person            // extends keyword to acquire properties of parent class to child class
{
    constructor(name, age, grade)      // child constructor
    {
        super(name, age);             //calls the parent constructor
        this.grade = grade;
    }


    getStudentDetails()
    {
        const studentDetails = super.getDeails();        // access the parent method/properties
        console.log(`${studentDetails}, Grade: ${this.grade}`);     
    }

}

const stud1 = new Student("Arav", 23, "D");  
const stud2 = new Student("AKeerthav", 26, "A");   // create obj for child class only as it extends parent class and has its properties
stud1.getStudentDetails();
stud2.getStudentDetails();     // with child obj access the methods in child.
