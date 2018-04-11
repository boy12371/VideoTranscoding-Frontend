import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { SessionData } from "../models/sessionData.model";
import { User } from "../models/user.model";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientBasicAuth {

    public sessionData: SessionData;

    constructor(private http: HttpClient) {
        this.sessionData = new SessionData();

    }

    generateHeaders(): HttpHeaders {
        if (this.sessionData.amILogged()) {
            let headers = new HttpHeaders();
            headers = headers.set('Authorization', this.sessionData.authToken());
            return headers;
        }
        return new HttpHeaders();
    }

    get(url): Observable<any> {
        return this.http.get(url, {
            headers: this.generateHeaders()
        });
    }

    post(url, data): Observable<any> {
        return this.http.post(url, data, {
            headers: this.generateHeaders()
        });
    }
    patch(url, data): Observable<any> {
        return this.http.patch(url, data, {
            headers: this.generateHeaders()
        });
    }
    delete(url): Observable<any> {
        return this.http.delete(url, { headers: this.generateHeaders() })
    }

    sendConversion(url: string, formdata: FormData): Observable<any>  {
        const req = new HttpRequest('POST', url, formdata, {
            reportProgress: true, headers: this.generateHeaders()
        });
        return this.http.request(req);
    }

    setUser(u: User):void {
        this.sessionData.setUserLogged(u);
        this.sessionData.setAmIAdmin(this.sessionData.getUserLogged().roles.indexOf("ADMIN") > -1);
        this.sessionData.setAmILogged(true);
        this.sessionData.saveData();
    }

}
