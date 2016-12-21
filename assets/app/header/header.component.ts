import { Router } from '@angular/router';

import { AuthorizationService } from './../auth/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {

    username?: string;

    constructor(private authorizationService: AuthorizationService, private router: Router) {

    }

    ngOnInit() {
        this.username = localStorage.getItem('userName');
    }

    logout() {
        this.authorizationService.logout();
        //this.router.navigateByUrl('/login');
    }

}
