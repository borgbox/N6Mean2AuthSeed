import { routing } from './../app.routing';
import { HeaderModule } from './../header/header.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        HeaderModule, routing
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
