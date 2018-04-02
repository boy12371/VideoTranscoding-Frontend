import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    error_login: boolean;
    model = {
        nick: "",
        password: ""
    }
    constructor(public router: Router, private userService: UserService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }
    ngOnInit() {

    }
    logIn(username: string, password: string, event: Event) {
        event.preventDefault();
        this.ng4LoadingSpinnerService.show();
        this.error_login = false;
        this.userService.loginUser(username, password).subscribe(result => {
            this.userService.setUserLogged(result);
            this.router.navigate(['/dashboard']);
            this.ng4LoadingSpinnerService.hide();
        }, error => {
            this.error_login = true;
            this.ng4LoadingSpinnerService.hide();
        });

    }
}
