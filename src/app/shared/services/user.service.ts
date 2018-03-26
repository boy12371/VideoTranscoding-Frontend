import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as globals from 'globals';
@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(globals.USER_BASEURL);
    }
    getUser(nameUser:string,password:string): Observable<any> {
        var peticion=globals.USER_BASEURL+nameUser;
        console.log(peticion);
        return this.http.get(peticion);
    }
}