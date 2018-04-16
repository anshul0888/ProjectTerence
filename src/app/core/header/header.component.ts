import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged;

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit() {
    // this.isLogged = this.httpService.checkIsLoggedIn();
    this.httpService.userLogged.map(
      (response: boolean) => {
        console.log(response);
        this.isLogged = response;
        return response;
      }
    );
    // console.log(this.isLogged);
  }

  onLogin() {
    setTimeout(
      () => {
        this.isLogged = true;
        this.router.navigate(['home']);
      }
      , 5000);
  }

}
