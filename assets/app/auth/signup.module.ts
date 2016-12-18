import { CommonModule } from '@angular/common';
import { MessageModule } from './../message/message.module';
import { SignUpComponent } from './signup.component';
// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MessageModule, FormsModule, ReactiveFormsModule, CommonModule
    ],
    declarations: [
        SignUpComponent
    ],
    exports: [
        SignUpComponent,
    ]
})
export class SignUpModule {

}
