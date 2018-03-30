import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchVideosComponent } from './watch-videos.component';
import { WatchVideosRoutingModule } from './watch-videos-routing.module';
import { PageHeaderModule } from '../../shared';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

@NgModule({
  imports: [
    CommonModule,WatchVideosRoutingModule,
    PageHeaderModule, 
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  declarations: [WatchVideosComponent]
})
export class WatchVideosModule { }
