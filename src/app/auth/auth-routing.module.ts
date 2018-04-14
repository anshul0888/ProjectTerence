import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const authRoutes: Routes = [
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent }
  // { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
