import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Subject } from 'rxjs/Subject';

const apiUrl = 'https://railway-restrooms.herokuapp.com/';

@Injectable()
export class HttpServiceService {

  userLogged = new Subject();

  isLoggedIn = false;

  constructor(private httpClient: HttpClient, protected localStorage: LocalStorage) { }

  signUp(signUpData) {
    return this.httpClient.post(apiUrl + 'auth/signup', signUpData);
  }

  logIn(loginData, test) {
    console.log(apiUrl + 'auth/signin');
    this.httpClient.post('https://railway-restrooms.herokuapp.com/auth/signin', loginData, test).subscribe(
      (loginResponse) => {
        console.log(loginResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  logOut() {
    return this.httpClient.get(apiUrl + 'auth/logout');
  }

  authStatus() {
    return this.httpClient.get(apiUrl + 'auth/status');
  }

  storeToken(token) {
    return this.localStorage.setItem('userToken', token);
  }

  checkLogin() {
    return this.localStorage.getItem('userToken');
  }

  deleteToken() {
    return this.localStorage.clear();
  }

  check() {
    return this.httpClient.get(apiUrl);
  }

  checkIsLoggedIn() {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
}
