import { MessageModule } from './../../message/message.module';
import { SignUpComponent } from './signup.component';
import { signUpRouting } from './signup.routing'; 
// Angular Imports
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
		signUpRouting, MessageModule
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
