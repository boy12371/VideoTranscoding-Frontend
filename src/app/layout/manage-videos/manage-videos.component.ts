import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MediaService } from '../../shared/services/media.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.component.html',
  styleUrls: ['./manage-videos.component.scss'],
  animations: [routerTransition()]
})

export class ManageVideosComponent implements OnInit {
  

  constructor( private mediaService: MediaService,private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {

  }
  ngOnInit() {
  }

}
