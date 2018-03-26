import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { UserService } from './shared/services/user.service'
import { HttpClientBasicAuth } from './shared/services/HttpClientBasicAuth';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,FormsModule,
        BrowserModule.withServerTransition({ appId: 'my-app' }),
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, UserService,HttpClientBasicAuth ],
    bootstrap: [AppComponent]
})
export class AppModule { }
