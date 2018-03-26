import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service'
import { HttpClientBasicAuth } from '../shared/services/HttpClientBasicAuth';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    model = {
        nick: "",
        password: ""
    }
    constructor(public router: Router, private userService: UserService,private _http :HttpClientBasicAuth) { }
    ngOnInit() {

    }
    logIn(username: string, password: string, event: Event) {
        event.preventDefault();

        this.userService.loginUser(username, password).subscribe(result => { console.log(result) }, error => { console.log(error) });

    }
   
   
        // (click)="onLoggedin()"
        // this.userService.getUser
        //  localStorage.setItem('isLoggedin', 'true');
        //   [routerLink]="['/dashboard']"
    
}
