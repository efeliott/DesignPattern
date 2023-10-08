"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPublisher = exports.Publisher = void 0;
class Publisher {
    constructor() {
        this.subscribers = [];
    }
    addSubscribers(subscribers) {
        this.subscribers.push(subscribers);
    }
    ;
    writeNews(news) {
        this.subscribers.forEach((subscribers) => subscribers.sendNews(news));
    }
    ;
}
exports.Publisher = Publisher;
exports.UnionPublisher = new Publisher();
// class UnionSubscriber implements Subscribers{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     sendNews(news: string): void{
//         console.log(`${this.name} received ${news}`);
//     };
// }
//# sourceMappingURL=newspaper.js.map