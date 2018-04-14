import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LogInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
