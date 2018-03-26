import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from '../services/HttpClientBasicAuth'
import * as globals from '../../globals';
@Injectable()
export class UserService {

    constructor(private _http: HttpClientBasicAuth) { }

    getUsers(): Observable<any> {
        return this._http.get(globals.USER_BASEURL);
    }
    loginUser(nameUser: string, password: string): Observable<any> {
        this._http.sessionData.setAuthToken(this.generateAuthString(nameUser, password));
        this._http.sessionData.setAmILogged(true);
        var peticion = globals.USER_BASEURL + nameUser;
        return this._http.get(peticion);
    }
    private generateAuthString(username: String, password: String) {
        return 'Basic ' + btoa(username + ':' + password);
    }

}