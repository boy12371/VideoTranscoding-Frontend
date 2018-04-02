import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchOtherValidator } from './passwordValidation';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    userRegister: UserRegister;
    signupForm: FormGroup;
    error_signUp: boolean;
    registedAndLogin: boolean;
    constructor(public router: Router, private userService: UserService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }

    register() { }
    ngOnInit() {
        this.signupForm = new FormGroup({
            nick: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            userPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            passwordRepeat: new FormControl('', [Validators.required, matchOtherValidator('userPassword')])
        })
    }
    onSubmit(form: FormGroup) {
        this.ng4LoadingSpinnerService.show();
        this.error_signUp = false;
        this.registedAndLogin = false;
        let valuesForm: any = form.value;
        this.userRegister = valuesForm;
        console.log(this.userRegister);
        this.userService.registerUser(this.userRegister).subscribe(
            result => {
                this.registedAndLogin = true;
                this.userService.loginUser(this.userRegister.nick, this.userRegister.userPassword).subscribe(
                    result => {
                        this.userService.setUserLogged(result);
                        setTimeout(() => {
                            this.ng4LoadingSpinnerService.hide();
                            this.router.navigate(['/dashboard']);
                        },
                            2000);
                    },
                    error => {
                        this.error_signUp = true;
                        this.ng4LoadingSpinnerService.hide();
                    })
            }, error => {
                this.error_signUp = true;
                this.ng4LoadingSpinnerService.hide();
            }
        )
    }
}
export interface UserRegister {
    nick: string;
    email: string;
    userPassword: string;
}


