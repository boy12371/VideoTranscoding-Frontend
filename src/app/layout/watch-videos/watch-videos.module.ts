import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchVideosComponent } from './watch-videos.component';
import { WatchVideosRoutingModule } from './watch-videos-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,WatchVideosRoutingModule,PageHeaderModule
  ],
  declarations: [WatchVideosComponent]
})
export class WatchVideosModule { }
