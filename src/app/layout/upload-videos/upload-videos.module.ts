import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadVideosComponent } from './upload-videos.component';
import { UploadVideosRoutingModule } from './upload-videos-routing.module';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  imports: [
    CommonModule,
    UploadVideosRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule
  ],
  declarations: [UploadVideosComponent]
})
export class UploadVideosModule { }
