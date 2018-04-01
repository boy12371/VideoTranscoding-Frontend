import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media.service';
import { Original } from '../../shared/models/original.model';
import * as globals from '../../globals';

export interface IMedia {
  title: string;
  src: string;
  type: string;
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
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.getAllOriginal();

  }
  getAllOriginal() {
    this.mediaService.getAllMedia().subscribe(
      result => {
        console.log("REsultado watch videos");
        console.log(result);
        this.listOriginal = result;
        this.listOriginal.forEach(element => {
         // if (element.complete = false) {
            this.mediaService.getOriginalById(element.originalId).subscribe(
              originalComplete => {
                this.listOriginalComplete.push(originalComplete);
                console.log("Completeee");
                console.log(originalComplete);
              },
              error => console.log(error));
        // }
        });
      },
      error => (console.log(error)));


  }
  getVideoUrl(id: number) {
    return globals.WATCH_URL + id;
  }

}
