import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserRoutingModule } from './user-routing.module';

import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HotelComponent } from './home/hotel/hotel.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CoreModule
  ],
  declarations: [HomeComponent, HotelComponent]
})
export class UserModule { }
