import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientBasicAuth } from '../services/httpclientbasicauth.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _http: HttpClientBasicAuth, private userService: UserService) { }

    canActivate():boolean {
        let isLogged = this._http.sessionData.amILogged();
        if (isLogged) {
           return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
