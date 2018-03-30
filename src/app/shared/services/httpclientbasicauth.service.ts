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
        console.log(this.generateHeaders())
        console.log("HttpClient pre GET")
        return this.http.get(url, {
            headers: this.generateHeaders()
        });
    }

    post(url, data) {
        return this.http.post(url, data, {
            headers: this.generateHeaders()
        });
    }

    put(url, data) {
        return this.http.put(url, data, {
            headers: this.generateHeaders()
        });
    }

    sendConversionExpert(url: string, formdata: FormData) {
        console.log("Enviando conversion Expert")
        const req = new HttpRequest('POST', url, formdata, {
            headers: this.generateHeaders(),
            reportProgress: true,
            responseType: 'text'
        });
        console.log(formdata);
        //return this.http.request(req);
        return this.http.post(url, formdata, { headers: this.generateHeaders() });
    }

    //   postImage($event){
    //     var formData = new FormData();
    //     formData.append('file', $event.target.files[0]);
    //     return this.http.post(this.uploadImageURI, formData).map(
    //       response => response.json()
    //     );
    //   }

    //   logOut():Observable<any>{
    //     return this.get(this.logoutURI).map(
    //       response => {
    //         this.sessionData.reset();
    //       },
    //       error => console.log(error)
    //     );
    //   }

    setUser(u: User) {
        this.sessionData.setUserLogged(u);
        this.sessionData.setAmIAdmin(this.sessionData.getUserLogged().roles.indexOf("ADMIN") > -1);
        this.sessionData.setAmILogged(true);
        this.sessionData.saveData();
    }

}
