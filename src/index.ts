import { Student } from "./courses/student";
import { User, Workers, Administrateur } from "./courses/Worker";
import { Subscribers, UnionPublisher } from "./courses/newspaper";

// class StudentAdapter implements User{
//     username: string;
//     student: Student;


//     constructor(student: Student) {
//         this.student = student;
//     }
//     sendNews(news: string): void{
//         console.log(`Notif ${news}`);
//     };
//     getusername():string{
//         return this.student.getFullName();
//     };
//     login():void{
//         console.log("I am a student")
//     }
// }
// const john = new Student("john", "lasseter");

// const users: User[] = [new Workers("abc123"), 
// new Workers("abc123"), 
// new Workers("abc123"), 
// new Administrateur("admin1"), 
// new StudentAdapter(john)];

// users.forEach((user) => {
//     user.login();
//     UnionPublisher.addSubscribers(user);
// })

// UnionPublisher.writeNews("Je suis un article");