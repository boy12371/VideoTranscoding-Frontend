import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    userLogin: UserLogin;
    loginForm: FormGroup;
    error_login: boolean;
    noConnection: boolean;
    constructor(public router: Router, private userService: UserService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }
    ngOnInit() {
        this.loginForm = new FormGroup({
            nick: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        })
    }

    onSubmit(form: FormGroup) {
        this.ng4LoadingSpinnerService.show();
        this.error_login = false;
        this.noConnection = false;
        let valuesForm: any = form.value;
        this.userLogin = valuesForm;
        this.userService.loginUser(this.userLogin.nick, this.userLogin.password).subscribe(
            result => {
                this.userService.setUserLogged(result);
                this.router.navigate(['/dashboard']);
                this.ng4LoadingSpinnerService.hide();
            }, error => {
                console.log("Estado de error: ")
                console.log(error)
                console.log(error.code)
                if (error.status == 0) {
                    this.noConnection = true;
                    this.ng4LoadingSpinnerService.hide();
                }
                else if (error.status == 401) {
                    this.error_login = true;
                    this.ng4LoadingSpinnerService.hide();
                }
            });
    }
}
export interface UserLogin {
    nick: string;
    password: string;
}
