import { Component, OnInit } from '@angular/core';
import { NgForm, Form} from '@angular/forms';
import { WeatherService } from '../weather.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass']
})
export class WeatherSearchComponent implements OnInit {
  searchCity:string;
  user;
  constructor(private weatherService:WeatherService,private http:HttpClient ) { }

  ngOnInit() {
  }
  
  submit(myForm){
    this.searchCity = myForm.value.city;
    this.weatherService.searchWeatherData(this.searchCity);
    this.searchCity=" ";
  }
  
 
}
