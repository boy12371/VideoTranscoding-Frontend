import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from '../services/httpclientbasicauth.service'
import * as globals from '../../globals';
import { User } from '../models/user.model'
import { UserRegister } from '../../signup/signup.component';
@Injectable()
export class UserService {
    canNoReturn: boolean = true;
    authorized: boolean;
    constructor(private _http: HttpClientBasicAuth) { }

    getUsers(): Observable<any> {
        return this._http.get(globals.USER_BASEURL);
    }
    loginUser(nameUser: string, password: string): Observable<any> {
        this._http.sessionData.setAuthToken(this.generateAuthString(nameUser, password));
        this._http.sessionData.setAmILogged(true);
        var uri = globals.USER_BASEURL + nameUser;
        return this._http.get(uri);
    }
    setUserLogged(user: User) {
        this._http.setUser(user);
    }
    deleteUserLogged() {
        this._http.sessionData.reset();
    }
    getLoggedUser(): User {
        return this._http.sessionData.getUserLogged();
    }
    registerUser(user: UserRegister): any {
        var url = globals.USER_REGISTER;
        return this._http.post(url, user);
    }
    editUser(user: any): Observable<any> {

        return null;
    }
    private generateAuthString(username: String, password: String) {
        return 'Basic ' + btoa(username + ':' + password);
    }

}