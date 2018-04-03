import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        NgbModule.forRoot(),
        StatModule,
        Ng4LoadingSpinnerModule
    ],
    declarations: [
        DashboardComponent,
        
    ]
})
export class DashboardModule { }
