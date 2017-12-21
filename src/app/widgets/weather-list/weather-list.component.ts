import { Component, OnInit } from '@angular/core';
import { WeatherItm } from '../weather-itm';
import { WEATHER_ITEMS } from '../weather.data';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass']
})
export class WeatherListComponent implements OnInit {
  weatherItems:WeatherItm[];
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherItems=this.weatherService.getWeatherItems();
  }

}
