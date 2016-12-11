import { AuthorizationGuard } from './auth/authorization.guard';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthorizationGuard] },
    { path: 'login', component: LoginComponent },
    //Se caminho não encontrado redireciona para home
    { path: '**', redirectTo: '' }
];
/* Este trecho registra as rotas no modulo router 
    do Angular e depois exportar no app.module via
    import, no atributo imports do NgModule
    da constante abaixo nomeada de routing */
export const routing = RouterModule.forRoot(APP_ROUTES);


