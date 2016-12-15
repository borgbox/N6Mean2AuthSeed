import { ChartsModule } from './charts/charts.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/signup.component';
import { HeaderModule } from './header/header.module';
import { MessageModule } from './message/message.module';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';
import { HomeModule } from './home/home.module';
import { AuthorizationGuard } from './auth/authorization.guard';
import { AuthorizationService } from './auth/authorization.service';
import { LoginComponent } from './auth/login.component';
import { routing } from './app.routing';
/* Angular Imports */
//Essencial para renderização no Browser - import obrigatório
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*  This Module's Components */
import { AppComponent } from './app.component';

@NgModule({
    imports: [RouterModule, 
    		  BrowserModule,
              CommonModule,
              routing,
              FormsModule, 
              ReactiveFormsModule, 
              HttpModule, 
              HomeModule, 
              MessageModule, 
              HeaderModule,
              ChartsModule],
    declarations: [AppComponent, 
    			   LoginComponent, 
                   SignUpComponent],
    providers: [AuthorizationService, 
    			AuthorizationGuard],
    bootstrap: [AppComponent]

})
export class AppModule {

}
