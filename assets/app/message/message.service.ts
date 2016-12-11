import { Message } from './message.model';
import { EventEmitter } from '@angular/core'

export class MessageService {

    messageEmmit = new EventEmitter<Message>();

    constructor() { }

    handleMessage(message: any) {
        const messageData = new Message(message.type, message.title, message.content);
        this.messageEmmit.emit(messageData);
    }

}