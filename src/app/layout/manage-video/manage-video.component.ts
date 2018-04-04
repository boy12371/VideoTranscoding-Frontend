import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MediaService } from '../../shared/services/media.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Original } from '../../shared/models/original.model';
import { Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.scss'],
  animations: [routerTransition()]
})

export class ManageVideoComponent {
  originalVideo: Original = null;
  idOriginalVideo: number;
  canEvaluate: boolean;
  constructor(activatedRoute: ActivatedRoute, private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    this.idOriginalVideo = activatedRoute.snapshot.params['id'];
    this.getOriginal();
  }
  getOriginal() {
    this.ng4LoadingSpinnerService.show();
    this.mediaService.getOriginalById(this.idOriginalVideo).subscribe(
      result => {
        this.originalVideo = result;
        this.canEvaluate = true;
        this.ng4LoadingSpinnerService.hide();
      },
      error => {
        console.log(error);
        this.ng4LoadingSpinnerService.hide();
      })
  }

}
