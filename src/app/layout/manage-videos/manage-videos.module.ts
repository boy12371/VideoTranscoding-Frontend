import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageVideosComponent } from './manage-videos.component';
import { ManageVideosRoutingModule } from './manage-videos-routing.module';
import { PageHeaderModule } from '../../shared';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,ManageVideosRoutingModule,
    PageHeaderModule, 
    Ng4LoadingSpinnerModule
  ],
  declarations: [ManageVideosComponent]
})
export class ManageVideosModule { }
