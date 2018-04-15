import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFormData: FormGroup;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.loginFormData = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onLogIn() {
    console.log(this.loginFormData.value);
    this.httpService.logIn(this.loginFormData.value);
  }
}
