export class Student{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + "" + this.lastName;
    }

    doStudentStuffs(){
        console.log("I'm a student");
    }
}