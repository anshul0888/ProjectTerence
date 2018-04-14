import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const userRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class UserRoutingModule {}
