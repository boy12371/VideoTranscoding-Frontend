import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchVideosComponent } from './watch-videos.component';
import { WatchVideosRoutingModule } from './watch-videos-routing.module';

@NgModule({
  imports: [
    CommonModule,WatchVideosRoutingModule
  ],
  declarations: [WatchVideosComponent]
})
export class WatchVideosModule { }
