import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MediaService } from '../../shared/services/media.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Original } from '../../shared/models/original.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-videos',
  templateUrl: './manage-videos.component.html',
  styleUrls: ['./manage-videos.component.scss'],
  animations: [routerTransition()]
})

export class ManageVideosComponent implements OnInit {
  originalVideos: Array<Original> = [];
  isCollapsed = true;

  constructor(private router: Router, private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {

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
  goToConversion(originalId: number) {
    console.log("Navegando a originalId");
    this.router.navigate(['/manage-video/' + originalId]);

  }
  watchVideo(idRedirect: number, idWatchRedirect: number) {
    console.log(idRedirect);
    console.log(idWatchRedirect);
    this.router.navigate(['/watch-video/' + idRedirect], { queryParams: { idWatch: idWatchRedirect } });
  }
}
