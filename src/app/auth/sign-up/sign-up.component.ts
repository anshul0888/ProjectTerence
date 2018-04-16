import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormData: FormGroup;
  confirmpass: boolean;
  confirmfail: boolean;
  signInLoading: boolean;
  signInButtonLabel: string;
  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.signUpFormData = new FormGroup({
      'fullName': new FormControl(null, [Validators.required]),
      'userName': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.email]),
      'passEnter': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'passConfirm': new FormControl(null, [Validators.required, Validators.minLength(4)])
    });

    this.signInButtonLabel = 'Sign In';
    this.signInLoading = false;
  }

  onSignUp() {
    console.log(this.signUpFormData.value);
    this.signInLoading = true;
    this.signInButtonLabel = 'Loading';
    this.httpService.signUp(this.signUpFormData.value).subscribe(
      (signUpResponse) => {
        signUpResponse = JSON.parse(JSON.stringify(signUpResponse));
        console.log(signUpResponse);
        this.signInLoading = false;
        this.signInButtonLabel = 'Loading';
      }
    );
  }

  onConfirmPassword() {
    if (this.signUpFormData.get(['passEnter']).value !== this.signUpFormData.get(['passConfirm']).value ) {
      this.confirmfail = true;
      this.confirmpass = false;
      console.log('false');
    } else if (this.signUpFormData.get(['passEnter']).value === this.signUpFormData.get(['passConfirm']).value ) {
      this.confirmfail = false;
      this.confirmpass = true;
      console.log('true');
    }
  }

}
