import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadVideosComponent } from './upload-videos.component';
import { UploadVideosRoutingModule } from './upload-videos-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,UploadVideosRoutingModule,PageHeaderModule
  ],
  declarations: [UploadVideosComponent]
})
export class UploadVideosModule { }
