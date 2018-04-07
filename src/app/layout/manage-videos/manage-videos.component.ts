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
  stopScroll = false;
  finished = false;
  sum: number;
  constructor(private router: Router, private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {

  }
  ngOnInit() {
    this.stopScroll = false;
    this.finished = false;
    this.sum = 0;
    this.ng4LoadingSpinnerService.show();
    this.mediaService.getAllMediaByPageable(this.sum).subscribe(
      result => {
        this.originalVideos = result;
        this.ng4LoadingSpinnerService.hide();
      },
      error => {
        console.log(error);
        this.ng4LoadingSpinnerService.hide();
      })
  }
  onScroll() {
    this.ng4LoadingSpinnerService.show();
    if (this.finished || this.stopScroll) { return; }
    this.stopScroll = true;
    this.sum += 1;
    this.mediaService.getAllMediaByPageable(this.sum).subscribe(
      films => {
        films.forEach((itm) => {
          this.originalVideos.push(itm);
          this.stopScroll = false;
        });
        this.ng4LoadingSpinnerService.hide();
      },
      error => {
        //console.log(error);
        this.ng4LoadingSpinnerService.hide();
      });
  }
  goToConversion(originalId: number) {
    console.log("Navegando a originalId");
    this.router.navigate(['/manage-video/' + originalId]);

  }
  watchVideo(idRedirect: number, idWatchRedirect: number) {
    this.router.navigate(['/watch-video/' + idRedirect], { queryParams: { idWatch: idWatchRedirect } });
  }
  downloadVideo(originalIdDownload: number) {
    this.mediaService.downloadById(originalIdDownload);
  }
}
