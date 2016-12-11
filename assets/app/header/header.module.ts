/* Para routerLink funcionar existe a dependência desse import */
import { RouterModule } from '@angular/router';
// Angular Imports
import { NgModule } from '@angular/core';
// This Module's Components
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}
