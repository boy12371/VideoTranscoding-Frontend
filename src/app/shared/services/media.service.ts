import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from '../services/httpclientbasicauth.service'
import * as globals from '../../globals';

@Injectable()
export class MediaService {

    constructor(private _http: HttpClientBasicAuth) { }

    getTypeBasic(): Observable<any> {
        return this._http.get(globals.CONVERSION_BASIC_URL);
    }
    getTypeExpert(): Observable<any> {
        return this._http.get(globals.CONVERSION_EXPERT_URL);
    }

}