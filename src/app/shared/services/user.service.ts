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
}