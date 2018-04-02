import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media.service';
import { Original } from '../../shared/models/original.model';
import * as globals from '../../globals';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Conversion } from '../../shared/models/conversion.model';
import { VgAPI } from 'videogular2/core';

export interface CurrentItem {
  conversion: Conversion;
  src: string;

}
@Component({
  selector: 'app-watch-videos',
  templateUrl: './watch-videos.component.html',
  styleUrls: ['./watch-videos.component.scss'],
  animations: [routerTransition()]

})
export class WatchVideosComponent implements OnInit {

  listOriginal: Array<Original> = [];
  listOriginalComplete: Array<Original> = [];
  noListOriginal: boolean = false;
  currentItemConversion: CurrentItem;
  api: VgAPI;

  constructor(private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }
  onPlayerReady(api: VgAPI) {
    this.api = api;

  }
  ngOnInit() {
    this.ng4LoadingSpinnerService.show();
    this.getAllOriginal();

  }
  getAllOriginal() {
    this.mediaService.getAllMedia().subscribe(
      result => {
        console.log("REsultado watch videos");
        console.log(result);
        this.listOriginal = result;
        this.listOriginal.forEach(element => {
          if (element.complete == true) {
            this.mediaService.getOriginalById(element.originalId).subscribe(
              originalComplete => {
                this.listOriginalComplete.push(originalComplete);
                this.currentItemConversion = { conversion: this.listOriginalComplete[0].conversions[0], src: this.getVideoUrl(this.listOriginalComplete[0].conversions[0].conversionId) };
                this.ng4LoadingSpinnerService.hide();
              },
              error => {
                console.log(error);
                this.ng4LoadingSpinnerService.hide();
                this.noListOriginal = true;
              })
          } else {
            this.ng4LoadingSpinnerService.hide();
            this.noListOriginal = true;
          }
        });
      },
      error => {
        console.log(error);
        this.ng4LoadingSpinnerService.hide();
        this.noListOriginal = true;
      });
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
    this.currentItemConversion.src=this.getVideoUrl(this.currentItemConversion.conversion.conversionId);
  }

}
