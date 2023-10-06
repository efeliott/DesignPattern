import { Subscribers } from "./newspaper";

export interface User extends Subscribers{
    username: string;
    getusername(): string;
    login(): void;
}

export class Workers implements User{
    username: string;

    constructor(username){
        this.username = username;
    }

    getusername(){
        return this.username;
    };

    login(){
        console.log("I'm doing USER login stuff");
    };
    sendNews(news: String): void {
        console.log(news);
    };
}

export class Administrateur implements User{
    username: string;

    constructor(username){
        this.username = username;
    }
    getusername(){
        return "admin" + this.username;
    };

    login(){
        console.log("I'm doing ADMIN login stuff");
    };
    sendNews(news: String): void {
        console.log(news);
    };
}
