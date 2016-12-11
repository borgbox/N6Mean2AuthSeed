import { SignUpModule } from './auth/signin/signup.module';
import { SignUpComponent } from './auth/signin/signup.component';
import { AuthorizationGuard } from './auth/authorization.guard';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    //Base 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //Home
    {
        path: 'home', component: HomeComponent, canActivate: [AuthorizationGuard], children: 
        [ { path: '', component: HomeComponent },
          { path: 'signup', component: SignUpComponent }]
    },
    //Login
    { path: 'login', component: LoginComponent },
    //Se caminho não encontrado redireciona para home
    { path: '**', redirectTo: '/home' }
];
/* Este trecho registra as rotas no modulo router 
    do Angular e depois exportar no app.module via
    import, no atributo imports do NgModule
    da constante abaixo nomeada de routing */
export const routing = RouterModule.forRoot(APP_ROUTES);


