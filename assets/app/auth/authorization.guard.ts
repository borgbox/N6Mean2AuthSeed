import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

/* Classe que guarda deverá ser inserida em providers no module
e depoisno arquivo routing */
@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('token')) {
            //Se estiver logado retorna true
            return true;
        }
        //Não logado é retornado a página de Login
        this.router.navigate(['/login']);
        return false;
    }
}