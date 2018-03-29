import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-watch-videos',
  templateUrl: './watch-videos.component.html',
  styleUrls: ['./watch-videos.component.scss'], 
  animations: [routerTransition()]

})
export class WatchVideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
