import { MessageService } from './message.service';
import { Message } from './message.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {

/* O seguintes imports devem ser realizados para ngStyle funcionar
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';*/

    message: Message;
    typeMessage = 'none';
    display = 'none';

    constructor(private messageService: MessageService) { }
	
    ngOnInit() {
        this.messageService.messageEmmit
            .subscribe(
            (message: Message) => {
                this.message = message;

                this.display = 'block';
                switch (message.type) {
                    case 'E':
                        this.typeMessage = 'modal-header-danger';
                        break;
                    case 'S':
                        this.typeMessage = 'modal-header-success';
                        break;
                    case 'I':
                        this.typeMessage = 'modal-header-info';
                        break;
                    case 'W':
                        this.typeMessage = 'modal-header-primary';
                        break;
                    default:
                        break;
                }
            }
            )
    }

    closeMessage(){
        this.display = 'none';
    }

}
