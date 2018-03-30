import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from './httpclientbasicauth.service';
import { HttpEvent } from '@angular/common/http';

import * as globals from '../../globals';

@Injectable()
export class UploadFileService {

  constructor(private _http: HttpClientBasicAuth) { }

  uploadFileExpert(file: File, expertConversions: string[]){
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('conversionType',expertConversions[0]);
    return this._http.sendConversionExpert(globals.CONVERSION_EXPERT_URL, formdata);
  }

}
