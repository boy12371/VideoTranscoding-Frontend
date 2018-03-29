import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchOtherValidator } from './passwordValidation';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
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
    loading: boolean;
    registedAndLogin: boolean;
    constructor(public router: Router, private userService: UserService) { }

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
        this.loading = true;
        this.error_signUp=false;
        this.registedAndLogin=false;
        let valuesForm: any = form.value;
        this.userRegister = valuesForm;
        console.log(this.userRegister);
        this.userService.registerUser(this.userRegister).subscribe(
            result => {
                this.registedAndLogin = true;
                this.userService.loginUser(this.userRegister.nick, this.userRegister.userPassword).subscribe(
                    result => {
                        this.userService.setUserLogged(result);
                        setTimeout(() => 
                        {
                            this.router.navigate(['/dashboard']);
                        },
                        2000); 
                        this.loading = false;
                    },
                    error => { this.error_signUp = true; this.loading = false })
            }, error => { this.error_signUp = true; this.loading = false }
        )
    }




}
export interface UserRegister {
    nick: string;
    email: string;
    userPassword: string;
}


