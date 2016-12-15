import { MessageModule } from './../message/message.module';
import { SignUpComponent } from './signup.component';
// Angular Imports
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
		MessageModule
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
