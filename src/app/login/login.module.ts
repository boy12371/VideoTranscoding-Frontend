import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
        LoginRoutingModule,
        Ng4LoadingSpinnerModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [LoginComponent]
})
export class LoginModule { }
