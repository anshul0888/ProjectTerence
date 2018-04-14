import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path: 'not-found', component: ErrorPageComponent }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
