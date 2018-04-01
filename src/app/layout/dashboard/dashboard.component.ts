import { Component, OnDestroy, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MediaService } from '../../shared/services/media.service';
import { Original } from '../../shared/models/original.model';
import { Conversion } from '../../shared/models/conversion.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit, OnDestroy {
    originalVideos: Array<Original> = [];
    onConversion: boolean = false;
    videoOnConversion: Original = { originalId: 0, name: "", path: "", userVideo: null, fileSize: "", conversions: null, complete: false, active: false };
    conversionOnProgress:Conversion;
    private alive: boolean; // used to unsubscribe from the IntervalObservable
    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        this.getAllMedia();
        setTimeout(() => {
            this.getOnConversion();
        },
            2000);
    }

    getAllMedia() {
        this.mediaService.getAllMedia().subscribe(
            result => {
                console.log("realizand peticion")
                this.originalVideos = result;
            },
            error => console.log(error))
    }
    getOnConversion() {
        this.originalVideos.forEach(element => {
            console.log("Comparando objeto: " + element.name + " y esta: " + element.active)
            if (element.active == true) {
                console.log("Conversion Activa: " + element.originalId)
                this.videoOnConversion = element;
                this.onConversion = true;
                this.updateOnConversion();
            }

        });
    }
    updateOnConversion() {
        this.mediaService.getOriginalById(this.videoOnConversion.originalId).subscribe(
            result => {
                this.onConversion = true;
                this.videoOnConversion = result;
                console.log(result);
                this.videoOnConversion.conversions.forEach(
                    conversion => {
                        if (conversion.active == true) { 
                            this.conversionOnProgress=conversion;
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
