import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadVideosComponent } from './upload-videos.component';
import { UploadVideosRoutingModule } from './upload-videos-routing.module';

@NgModule({
  imports: [
    CommonModule,UploadVideosRoutingModule
  ],
  declarations: [UploadVideosComponent]
})
export class UploadVideosModule { }
