import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData: FormGroup;
  info = [
    {
      hotelName: 'Haven Inn',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 5000,
      images: [],
      reviews: {
        location: 8.9,
        rooms: 8.5,
        service: 9,
        cleanliness: 8,
        valueForMoney: 7,
        comfort: 8,
        facilities: 6,
        building: 8,
        food: 9
      },
      description: 'Live the high life, quite literally, in the sublime Hotel Marina in the foothills of the Himalayas. Set in an acre of luscious greenery off the famous Mall of Shimla, this boutique hotel, a favourite with Bollywood stars, offers stunning views of the surrounding valley.'
    },{
      hotelName: 'Haven Inn',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 5000,
      images: [],
      reviews: {
        location: 8.9,
        rooms: 8.5,
        service: 9,
        cleanliness: 8,
        valueForMoney: 7,
        comfort: 8,
        facilities: 6,
        building: 8,
        food: 9
      },
      description: 'Live the high life, quite literally, in the sublime Hotel Marina in the foothills of the Himalayas. Set in an acre of luscious greenery off the famous Mall of Shimla, this boutique hotel, a favourite with Bollywood stars, offers stunning views of the surrounding valley.'
    },{
      hotelName: 'Haven Inn',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 5000,
      images: [],
      reviews: {
        location: 8.9,
        rooms: 8.5,
        service: 9,
        cleanliness: 8,
        valueForMoney: 7,
        comfort: 8,
        facilities: 6,
        building: 8,
        food: 9
      },
      description: 'Live the high life, quite literally, in the sublime Hotel Marina in the foothills of the Himalayas. Set in an acre of luscious greenery off the famous Mall of Shimla, this boutique hotel, a favourite with Bollywood stars, offers stunning views of the surrounding valley.'
    },{
      hotelName: 'Haven Inn',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 5000,
      images: [],
      reviews: {
        location: 8.9,
        rooms: 8.5,
        service: 9,
        cleanliness: 8,
        valueForMoney: 7,
        comfort: 8,
        facilities: 6,
        building: 8,
        food: 9
      },
      description: 'Live the high life, quite literally, in the sublime Hotel Marina in the foothills of the Himalayas. Set in an acre of luscious greenery off the famous Mall of Shimla, this boutique hotel, a favourite with Bollywood stars, offers stunning views of the surrounding valley.'
    }
  ]
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
