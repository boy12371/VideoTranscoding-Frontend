import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule, 
    FormsModule,  
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
