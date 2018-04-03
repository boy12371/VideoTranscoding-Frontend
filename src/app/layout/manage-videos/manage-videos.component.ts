import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MediaService } from '../../shared/services/media.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Original } from '../../shared/models/original.model';
@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.component.html',
  styleUrls: ['./manage-videos.component.scss'],
  animations: [routerTransition()]
})

export class ManageVideosComponent implements OnInit {
  originalVideos: Array<Original> =[];
  isCollapsed = true;


  constructor(private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {

  }
  ngOnInit() {
    this.ng4LoadingSpinnerService.show();
    this.mediaService.getAllMedia().subscribe(
      result => {
        this.originalVideos = result;
        this.ng4LoadingSpinnerService.hide();
      },
      error => {
        console.log(error);
        this.ng4LoadingSpinnerService.hide();
      })
  }
  fillCollapse(originalId: number,indexArray:number) {
    this.isCollapsed = !this.isCollapsed ;
    console.log("Realizando la peticion para :"+originalId);
    this.mediaService.getOriginalById(originalId).subscribe(
      result => {
        console.log(result);
        this.originalVideos[indexArray]=result;
      },
      error => {
        console.log(error)
      })

  }
}
