import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { UserService } from './shared/services/user.service'
import { OriginalService } from './shared/services/original.service'
import { HttpClientBasicAuth } from './shared/services/httpclientbasicauth.service';
import { UploadFileService } from './shared/services/upload-file.service';
import { MediaService } from './shared/services/media.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule.withServerTransition({ appId: 'my-app' }),
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, UserService, HttpClientBasicAuth, OriginalService, MediaService, UploadFileService],
    bootstrap: [AppComponent]
})
export class AppModule { }
