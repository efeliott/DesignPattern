"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrateur = exports.Workers = void 0;
class Workers {
    constructor(username) {
        this.username = username;
    }
    getusername() {
        return this.username;
    }
    ;
    login() {
        console.log("I'm doing USER login stuff");
    }
    ;
    sendNews(news) {
        console.log(news);
    }
    ;
}
exports.Workers = Workers;
class Administrateur {
    constructor(username) {
        this.username = username;
    }
    getusername() {
        return "admin" + this.username;
    }
    ;
    login() {
        console.log("I'm doing ADMIN login stuff");
    }
    ;
    sendNews(news) {
        console.log(news);
    }
    ;
}
exports.Administrateur = Administrateur;
//# sourceMappingURL=Worker.js.map