export interface Subscribers {
    sendNews(news : String): void;
}

export class Publisher {
    subscribers: Subscribers[];

    constructor(){
        this.subscribers = [];
    }

    addSubscribers(subscribers : Subscribers){
        this.subscribers.push(subscribers);
    };

    writeNews(news: String){
        this.subscribers.forEach((subscribers) => subscribers.sendNews(news));
    };
}

export const UnionPublisher = new Publisher();

// class UnionSubscriber implements Subscribers{
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }

//     sendNews(news: string): void{
//         console.log(`${this.name} received ${news}`);
//     };
// }