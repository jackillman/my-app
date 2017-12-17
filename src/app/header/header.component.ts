import { Component, OnInit } from '@angular/core';
import {appRoutes} from '../app.router';
import {cars,trucks} from '../../assets/auto';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  cars;
  trucks;

  constructor() { }

  ngOnInit() {
    this.cars = cars;
    this.trucks = trucks;
  }

}
