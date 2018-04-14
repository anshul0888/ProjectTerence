import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ErrorPageComponent,
    LoadingPageComponent,
    ButtonComponent
  ]
})
export class CoreModule { }
