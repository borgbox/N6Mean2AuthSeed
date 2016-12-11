export class Message {
    //Types 'E'= Error, 'S'=Success, 'W'=Warning, 'I'=Information
    constructor(public type: string, public title: string, public content: string) { }
}