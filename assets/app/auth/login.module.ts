import { MessageModule } from './../message/message.module';
// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// This Module's Components
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      MessageModule, FormsModule, ReactiveFormsModule, CommonModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {

}
