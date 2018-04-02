import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    }

    ngOnInit() {
        this.ng4LoadingSpinnerService.show();

    }
}
