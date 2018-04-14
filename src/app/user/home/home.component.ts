import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchData = new FormGroup({
      'search': new FormControl(null, [Validators.required]),
      'checkIn': new FormControl(null, [Validators.required]),
      'checkOut': new FormControl(null, [Validators.required]),
      'persons': new FormControl(null, [Validators.required])
    });
  }

  changed() {
    console.log(this.searchData);
  }

}
