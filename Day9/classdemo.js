class Student{
    id;
    firstName;
    lastName;
    phone;
    location;
    course;

    constructor(id,firstName,lastName,phone,location){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.location=location;
        //this.clgName='EUREKA'
    }
    fullName(){
        console.log(`fullname for id:${this.id} is ${this.firstName} ${this.lastName}`);
    }
}
Student.prototype.clgName='Eureka';
let std1=new Student(1,'vyshnavi','shivanathuni',1253467,'PA' );
console.log(std1);
console.log(std1.clgName);

std1.fullName();