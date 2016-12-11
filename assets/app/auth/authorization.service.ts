import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// Para poder utilizar map e Observables
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthorizationService {

    constructor(private http: Http) { }

    signup(user: User) {

        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/user', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                console.log(error)//TODO Serviço de erro
                return Observable.throw(error.json());
            });

    }

    signin(user: User) {

        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/user/signin', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                debugger;
                //this.errorService.handleError(error.json())
                return Observable.throw(error.json());
            });
    }

    //Desloga através da eliminação do token do localstorage
    logout() {
        localStorage.clear();
    }
    //Verifica se usuário está logado através da existência do token
    isLoggedIn() {
        return localStorage.getItem('token') != null;
    }
}