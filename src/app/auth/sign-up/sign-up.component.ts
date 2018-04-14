import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormData: FormGroup;
  confirmpass: boolean;
  confirmfail: boolean;
  constructor() { }

  ngOnInit() {
    this.signUpFormData = new FormGroup({
      'fullName': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'username': new FormControl(null, [Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  onSignUp() {
    console.log(this.signUpFormData);
  }

  onConfirmPassword() {
    if (this.signUpFormData.get(['password']).value !== this.signUpFormData.get(['confirmPassword']).value ) {
      this.confirmfail = true;
      this.confirmpass = false;
      console.log('false');
    } else if (this.signUpFormData.get(['password']).value === this.signUpFormData.get(['confirmPassword']).value ) {
      this.confirmfail = false;
      this.confirmpass = true;
      console.log('true');
    }
  }

}
