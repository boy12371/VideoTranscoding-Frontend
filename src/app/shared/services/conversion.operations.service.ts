import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from '../services/httpclientbasicauth.service'
import * as globals from '../../globals';

@Injectable()
export class ConversionOperationsService {

    constructor(private _http: HttpClientBasicAuth) { }



}