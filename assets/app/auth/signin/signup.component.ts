import { Message } from './../../message/message.model';
import { MessageService } from './../../message/message.service';
import { User } from './../user.model';
import { AuthorizationService } from './../authorization.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'my-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    providers: [MessageService] 
})
export class SignUpComponent {
    //Available roles for users
    roles = [{ id: "com", description: "Comum" },
    { id: "adm", description: "Administrador" }];

    myForm: FormGroup;

    constructor(private authorizationService: AuthorizationService, private messageService: MessageService) { }

    onSubmit() {

		if(this.myForm.value.password != this.myForm.value.passwordRepeat){
			this.messageService.handleMessage(new Message('E', 'Cadastro Usuário', 'Senhas informadas não são idênticas'));
            return false;
        }

        this.authorizationService.signup(new User(this.myForm.value.email,
        										  this.myForm.value.password,
                                                  this.myForm.value.firstname,
                                                  this.myForm.value.lastname,
                                                  this.myForm.value.role))
            .subscribe(data => {
                this.messageService.handleMessage(new Message('S', 'Cadastro Usuário', 'Usuário ' + data.userName + ' cadastrado!'));
            },
            error => {
                this.messageService.handleMessage(new Message('E', 'Cadastro Usuário', 'Erro: ' + error));
                console.log(error);
            }
            );
        this.myForm.reset();
    }

    ngOnInit() {
        //Cria formulário com seus respectivos atributos
        this.myForm = new FormGroup({
            firstname: new FormControl(null, [Validators.required]),
            lastname: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
            password: new FormControl(null, [Validators.required]),
            passwordRepeat: new FormControl(null, [Validators.required]),
            role: new FormControl(null, [Validators.required])
        });
    }

}
