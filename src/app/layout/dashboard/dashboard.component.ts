import { Component, OnDestroy, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media.service';
import { Original } from '../../shared/models/original.model';
import { Conversion } from '../../shared/models/conversion.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit, OnDestroy {
    originalVideos: Array<Original> = [];
    originalOnProgress: Original = { originalId: 0, name: "", path: "", userVideo: null, fileSize: "", conversions: null, complete: false, active: false };
    conversionsConverted: Array<Conversion> = [];
    conversionOnProgress: Conversion;
    onConversion: boolean = false;
    loading: boolean = false;
    constructor(private mediaService: MediaService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    }

    ngOnInit() {
        this.ng4LoadingSpinnerService.show();
        this.loading = true;
        this.getAllMedia();
        setTimeout(() => {
            this.getOnProgress();
        },
            2000);
    }

    getAllMedia() {
        this.mediaService.getAllMedia().subscribe(
            result => {
                console.log("Realizando peticion")
                this.originalVideos = result;
            },

            error => {
                console.log(error);
                this.ng4LoadingSpinnerService.hide();
                this.loading = false;
            })
    }
    getOnProgress() {
        this.originalVideos.forEach(element => {
            console.log("Comparando objeto: " + element.name + " y esta: " + element.active)
            if (element.active == true) {
                console.log("Conversion Activa: " + element.originalId)
                this.originalOnProgress = element;
                this.onConversion = true;
                this.updateOnConversion();
            }
            else {
                this.ng4LoadingSpinnerService.hide();
                this.loading = false;
                setTimeout(() => {
                    this.ngOnInit();
                },
                    60000);
            }

        });
    }
    updateOnConversion() {
        this.mediaService.getOriginalById(this.originalOnProgress.originalId).subscribe(
            result => {
                this.onConversion = true;
                this.originalOnProgress = result;
                this.conversionsConverted = [];
                this.originalOnProgress.conversions.forEach(
                    conversion => {
                        if (conversion.active == true) {
                            this.ng4LoadingSpinnerService.hide();
                            this.loading = false;
                            this.conversionOnProgress = conversion;
                        }
                        if (conversion.finished == true) {
                            this.conversionsConverted.push(conversion);
                        }
                    })
                setTimeout(() => {
                    this.updateOnConversion();
                },
                    2000);
            },
            error => console.log(error)
        );
    }

    ngOnDestroy() {
    }

}
