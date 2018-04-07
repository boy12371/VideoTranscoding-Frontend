import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageVideosComponent } from './manage-videos.component';
import { ManageVideosRoutingModule } from './manage-videos-routing.module';
import { PageHeaderModule } from '../../shared';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  imports: [
    CommonModule, 
    ManageVideosRoutingModule,
    PageHeaderModule,
    Ng4LoadingSpinnerModule,
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  declarations: [ManageVideosComponent]
})
export class ManageVideosModule { }
