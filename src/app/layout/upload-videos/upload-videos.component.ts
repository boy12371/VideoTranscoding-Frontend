import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { HttpClientBasicAuth } from '../../shared/services/httpclientbasicauth.service';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.scss'],
  animations: [routerTransition()]
})

export class UploadVideosComponent implements OnInit {

  conversions: string[] = [];

  constructor(private uploadService: UploadFileService) { }


  ngOnInit() {
  }

  upload() {
    this.conversions.push("MKV_HEVC1080_AAC");
    this.uploadService.uploadFileExpert(null, this.conversions).subscribe(result => {
      {
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
        // } else if (event instanceof HttpResponse) {
        //   console.log('File is completely uploaded!');
        // } error => console.log(error)
      }
    })
  }

}
