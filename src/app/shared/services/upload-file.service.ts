import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from './httpclientbasicauth.service';
import { HttpEvent } from '@angular/common/http';

import * as globals from '../../globals';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UploadFileService {

  constructor(private _http: HttpClientBasicAuth) { }

  uploadFileExpert(form: FormGroup, file: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', file, file.name);
    formdata.append('conversionType', form.get('conversionType').value);
    return this._http.sendConversion(globals.CONVERSION_EXPERT_URL, formdata);
  }
  uploadFileBasic(form: FormGroup, file: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', file, file.name);
    formdata.append('conversionType', form.get('conversionType').value);
    return this._http.sendConversion(globals.CONVERSION_BASIC_URL, formdata);

  }

}
