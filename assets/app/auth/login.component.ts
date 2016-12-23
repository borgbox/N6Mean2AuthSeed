import { MessageService } from './../message/message.service';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthorizationService } from './authorization.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'my-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [MessageService]
})
export class LoginComponent {

    myForm: FormGroup;

    constructor(private authorizationService: AuthorizationService, private router: Router, private messageService: MessageService) { }

    onSubmit() {
        this.authorizationService.signin(new User(this.myForm.value.email, this.myForm.value.password))
            .subscribe(data => {
                /* Opção por localstorage em detrimento de cookies */
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('userName', data.userName);
                /*Redireciona para Home após login*/
                this.router.navigateByUrl('/home');
            },
            error => { 
                this.messageService.handleMessage({ 'type': 'E', 'title': 'Erro de acesso', 'content': 'Usuário ou senha incorreto(s)' });
                console.log(error); }
            );
        this.myForm.reset();
    }

    testeErro() {
        this.messageService.handleMessage({ 'type': 'S', 'title': 'Erro Test', 'content': 'Contet of error' });
    }

    ngOnInit() {
        //Cria formulário com seus respectivos atributos
        this.myForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
            password: new FormControl(null, [Validators.required])
        });
    }

}
