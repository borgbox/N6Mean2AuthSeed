import { SignUpComponent } from './signup.component';

import { Routes, RouterModule } from '@angular/router';

/*
Nesse caso como é uma rota filha não se adiciona o caracter "/"
pois vai incrementar a rota auth. A constante será AUTH_ROUTES
será exportada para ser referenciada no app.routing.ts
*/
const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent },
];

export const signUpRouting = RouterModule.forChild(AUTH_ROUTES);