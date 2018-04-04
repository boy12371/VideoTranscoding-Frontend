import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageVideoComponent } from './manage-video.component';
import { ManageVideoRoutingModule } from './manage-video-routing.module';
import { PageHeaderModule } from '../../shared';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, 
    ManageVideoRoutingModule,
    PageHeaderModule,
    Ng4LoadingSpinnerModule,
    NgbModule.forRoot()
  ],
  declarations: [ManageVideoComponent]
})
export class ManageVideoModule { }
