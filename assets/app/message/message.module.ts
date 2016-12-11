/* O seguintes imports devem ser realizados para ngStyle funcionar
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';*/
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MessageComponent } from './message.component';

@NgModule({
    imports: [
        CommonModule, BrowserModule
    ],
    declarations: [
        MessageComponent,
    ],
    exports: [
        MessageComponent,
    ]
})
export class MessageModule {

}
