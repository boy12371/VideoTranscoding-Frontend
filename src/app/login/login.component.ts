import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    error_login: boolean;
    loading: boolean;
    model = {
        nick: "",
        password: ""
    }
    constructor(public router: Router, private userService: UserService) { }
    ngOnInit() {

    }
    logIn(username: string, password: string, event: Event) {
        event.preventDefault();
        this.loading = true;
        this.error_login = false;

        this.userService.loginUser(username, password).subscribe(result => {
            this.userService.setUserLogged(result);
            this.router.navigate(['/dashboard']);
            this.loading = false;
        }, error => { this.error_login = true; this.loading = false });

    }
}
