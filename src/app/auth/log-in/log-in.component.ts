import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFormData: FormGroup;
  loggedIn = false;

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit() {
    this.loginFormData = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onLogIn() {

    // setTimeout(() => {
    //   this.httpService.isLoggedIn = true;
    //   this.httpService.userLogged.next(this.loggedIn);
    //   this.router.navigate(['home']);
    // }, 1000);
    console.log(this.loginFormData.value);
    this.httpService.logIn('test', 'test');
    this.httpService.check().subscribe(
      (response) => console.log(response)
    );
  }
}
