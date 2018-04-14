import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFormData: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginFormData = new FormGroup({
      'username': new FormControl(null, [Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onLogIn() {
    console.log(this.loginFormData);
  }
}
