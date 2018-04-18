import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientBasicAuth } from '../services/httpclientbasicauth.service'
import * as globals from '../../globals';
import { Conversion } from '../models/conversion.model';

@Injectable()
export class MediaService {

    constructor(private _http: HttpClientBasicAuth) { }

    getTypeBasic(): Observable<any> {
        return this._http.get(globals.CONVERSION_BASIC_URL);
    }
    getTypeExpert(): Observable<any> {
        return this._http.get(globals.CONVERSION_EXPERT_URL);
    }
    getAllMediaByPageable(page: number): Observable<any> {
        return this._http.get(globals.MEDIA_URL + '?page=' + String(page) + '&size=9');
    }
    getAllMediaByPageableForDashboard(page: number): Observable<any> {
        return this._http.get(globals.MEDIA_URL + '?page=' + String(page) + '&size=1000');
    }
    getOriginalById(id: number): Observable<any> {
        const url = globals.MEDIA_URL + '/' + id;
        return this._http.get(url);
    }
    downloadById(id: number) {
        const url = globals.MEDIA_URL + '/'+id+'/content?forceSave=true';
        window.location.replace(url);
    }
    watchById(id:number):string{
        return globals.MEDIA_URL +'/'+ id+'/content?forceSave=false';
    }
    getErroredOnConversion(conversion: Conversion): boolean {
        if (conversion.fileSize.includes("0.00") && conversion.fileSize.length == 7) {
            return true;
        }
        else return false;
    }
    canPlayVideo(video: any): boolean {
        if (video.path.includes(".mkv")) {
            return false;
        }
        else {
            return true;
        }
    }
    deleteVideo(id: number): Observable<any> {
        const url = globals.MEDIA_URL + '/' + id;
        return this._http.delete(url);
    }
}