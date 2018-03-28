import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientBasicAuth } from '../services/HttpClientBasicAuth';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _http:HttpClientBasicAuth) { }

    canActivate() {
        let isLogged= this._http.sessionData.amILogged();
        if (isLogged) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
