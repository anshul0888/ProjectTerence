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
      images: 'https://imgio.trivago.com/uploadimages/16/08/16088718_x.jpeg',
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
      hotelName: 'Flag House Resort',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 4123,
      images: 'https://imgio.trivago.com/uploadimages/16/08/16088720_x.jpeg',
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
      description: 'Spectacular views of the neighbouring Himalayas make the two-star Flag House Resort a perfect setting in which to relax and unwind. Inspirational hiking trails add to the hotel’s unusual appeal.\n'
    },{
      hotelName: 'Radisson Jass',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 10900,
      images: 'https://imgio.trivago.com/partnerimages/13/79/137950108_x.jpeg',
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
      description: 'The hotel has 59 rooms graded deluxe room, deluxe suite and executive suite. All have views of the mountains and valley. All rooms have heating (essential in the winter) and air conditioning. Room facilities include tea and coffee maker, telephone, dataport, hair dryer, room safe, telephone and television. DVD players are available on request. Fruit and cookies are provided in each room. '
    },{
      hotelName: 'Marina',
      address: 'Shimla',
      fascilities: ['Free Wifi', 'Spa', 'Parking', 'A/C', 'Restaurant', 'Hotel Bar', 'Gym'],
      price: 11772,
      images: 'https://imgio.trivago.com/partnerimages/24/64/246464006_x.jpeg',
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
      description: 'Marina hosts a luxury spa and gym, free on-site parking and a concierge service. There\'s also a games room with arcade games and pool tables.'
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
