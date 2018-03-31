import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UploadFileService } from '../../shared/services/upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MediaService } from '../../shared/services/media.service';
@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.scss'],
  animations: [routerTransition()]
})

export class UploadVideosComponent implements OnInit {
  selectedFiles: FileList;
  file: File;
  uploadVideoExpertForm: FormGroup;
  uploadVideoBasicForm: FormGroup;
  typeConversionExpert: string[] = [];
  typeConversionBasic: string[] = [];
  progress: { percentage: number } = { percentage: 0 }

  constructor(private uploadService: UploadFileService, private mediaService: MediaService) {

  }
  ngOnInit() {
    this.getTypesExpert();
    this.getTypesBasic();
    this.uploadVideoExpertForm = new FormGroup({
      conversionType: new FormControl('')
    })
    this.uploadVideoBasicForm = new FormGroup({
      conversionType: new FormControl('')
    })
  }
  getTypesExpert() {
    this.mediaService.getTypeExpert().subscribe(
      result => this.typeConversionExpert = result,
      error => console.log(error))
  }
  getTypesBasic() {
    this.mediaService.getTypeBasic().subscribe(
      result => this.typeConversionBasic = result,
      error => console.log(error))
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFileExpert(form: FormGroup) {
    this.file = this.selectedFiles.item(0);
    this.progress.percentage = 0;
    this.uploadService.uploadFileExpert(form, this.file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      },
      error => console.log(error))

  }
  uploadFileBasic(form: FormGroup) {
    this.file = this.selectedFiles.item(0);
    this.progress.percentage = 0;
    this.uploadService.uploadFileBasic(form, this.file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      },
      error => console.log(error))
  }
}
