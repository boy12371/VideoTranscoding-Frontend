import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media.service';
import { Original } from '../../shared/models/original.model';
import * as globals from '../../globals';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Conversion } from '../../shared/models/conversion.model';
import { VgAPI } from 'videogular2/core';
import { ActivatedRoute } from '@angular/router';

export interface CurrentItem {
  conversion: Conversion;
  src: string;

}
@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss'],
  animations: [routerTransition()]

})
export class WatchVideoComponent implements OnInit {
  originalVideo: Original;
  currentItemConversion: CurrentItem;
  api: VgAPI;

  watchId: number;
  @Input() originalId: number;
  constructor(private activatedRoute: ActivatedRoute, private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    this.watchId = activatedRoute.snapshot.params['id'];

  }
  onPlayerReady(api: VgAPI) {
    this.api = api;

  }
  ngOnInit() {
    if (this.originalId == undefined) {
      //LANZAR NOT FOUND
    }
    this.ng4LoadingSpinnerService.show();
    this.getOriginal();
  }
  getOriginal() {
    this.mediaService.getOriginalById(this.originalId).subscribe(
      result => {
        this.originalVideo = result;
        this.ng4LoadingSpinnerService.hide();
      },
      error => {
        console.log(error);
        this.ng4LoadingSpinnerService.hide();
      }
    )
  }

  getVideoUrl(id: number) {
    return globals.WATCH_URL + id;
  }
  changeSource(newConversion: Conversion) {
    console.log("Cambiando conversion");
    console.log("Current item antes");
    console.log(this.currentItemConversion);
    this.currentItemConversion.conversion = newConversion;
    this.currentItemConversion.src = this.getVideoUrl(this.currentItemConversion.conversion.conversionId);
    console.log("Current Item Despues: ")
    console.log(this.currentItemConversion);
  }
  getSource() {
    return this.getVideoUrl(this.currentItemConversion.conversion.conversionId);
  }
  onClickPlaylistItem(item: Conversion, index: number) {
    this.currentItemConversion.conversion = item;
    this.currentItemConversion.src = this.getVideoUrl(this.currentItemConversion.conversion.conversionId);
  }

}
