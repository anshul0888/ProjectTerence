import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onAvailability = true;
  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {
    // //Checking whether user logged In or not
    // this.httpService.checkLogin().subscribe(
    //   (loggedIn) => {
    //     if (loggedIn) {
    //       this.httpService.userLogged.next(true);
    //     } else if (null) {
    //       this.httpService.userLogged.next(false);
    //     }
    //   },
    //   (error) => {
    //     this.httpService.userLogged.next(false);
    //   }
    // );
    // //Checking whether user logged In or not
  }
}
