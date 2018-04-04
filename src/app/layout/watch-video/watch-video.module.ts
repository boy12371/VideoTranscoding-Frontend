import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchVideoComponent } from './watch-video.component';
import { WatchVideoRoutingModule } from './watch-video-routing.module';
import { PageHeaderModule } from '../../shared';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,WatchVideoRoutingModule,
    PageHeaderModule, 
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    Ng4LoadingSpinnerModule
  ],
  declarations: [WatchVideoComponent]
})
export class WatchVideoModule { }
